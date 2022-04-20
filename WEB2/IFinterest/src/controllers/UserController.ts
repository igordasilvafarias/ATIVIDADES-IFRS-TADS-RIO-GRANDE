import path from 'path';
import rootDir from '../rootDir';
import session from 'express-session';
import { Gallery, Image, Tag } from '../models';
import Formidable from 'formidable';
import { Request, Response } from 'express';
import fs from 'fs';
import { Op } from 'sequelize';

export class UserController {

    async showInitialPage(req: Request, res: Response) {

        let rawData: any = [];
        const images: any[] = [];

        const tags = String(req.query.search).split(',').map(s => s.trim());

        const tagsDB: any = [];

        if (req.query.search) {
            for (let tag of tags) {
                rawData = await Tag.findAll({ where: { description: { [Op.substring]: tag } }, include: Image });
                if (rawData.length > 0) {
                    rawData[0].images.forEach((data: { dataValues: { id: number; title: string; path: string; }; }) => {
                        images.push({
                            id: data.dataValues.id,
                            title: data.dataValues.title,
                            path: data.dataValues.path
                        })
                    })
                }
            };
        } else {
            rawData = await Image.findAll();

            rawData.forEach((data: { dataValues: { id: number; title: string; path: string }; }) => {
                images.push({
                    id: data.dataValues.id,
                    title: data.dataValues.title,
                    path: data.dataValues.path
                })
            })
        }

        res.render('initial', {
            user: req.session.data,
            images: images
        });

    }

    showProfilePage(req: Request, res: Response) {
        res.render('user/loginSuccess', { user: req.session.data });
    }

    showImagesPage(req: Request, res: Response) {
        res.render('image/showImageMenu', {
            user: req.session.data
        });
    }

    showAddImagePage(req: Request, res: Response) {
        res.render('image/imageAddPage', {
            user: req.session.data
        });
    }

    async addImage(req: Request, res: Response) {

        const form = Formidable({ multiples: false, uploadDir: path.join(rootDir, 'public', 'uploads') });

        form.parse(req, (err, fields, files) => {
            //console.log('fields:', fields);
            //console.log('files:', files);

            const file: any = files.image;
            const path = file.path;
            let type: string = file.name;
            const newName = path + type.substring(type.lastIndexOf('.'));

            console.log(path, type);

            fs.rename(path, newName, async error => {

                if (error) {
                    console.log(error)
                }

                const image = await Image.create({
                    title: fields.title,
                    userId: req.session.data.id,
                    path: newName.substring(newName.lastIndexOf('\\') + 1)
                })

                const tags = String(fields.tags).split(',').map(s => s.trim());

                const tagsDB: any = [];
                for (let tag of tags) {
                    const fetchedTag = await Tag.findOne({ where: { description: tag } });
                    if (!fetchedTag) {
                        const createdTag = await Tag.create({ description: tag });
                        tagsDB.push(createdTag);
                    } else {
                        tagsDB.push(fetchedTag);
                    }
                };

                for (let tag of tagsDB) {
                    const add = await (image as any).addTag(tag, { through: {} });
                    console.log(add);
                };

                res.render('image/imageAddSuccess', { user: req.session.data, image });

            });

        });

    }

    async showAllUserImages(req: Request, res: Response) {

        let rawData: any = [];
        const images: any[] = [];

        rawData = await Image.findAll({ where: { userId: req.session.data.id } });

        rawData.forEach((data: { dataValues: { id: number; title: string; path: string }; }) => {
            images.push({
                id: data.dataValues.id,
                title: data.dataValues.title,
                path: data.dataValues.path
            })
        })

        res.render('image/showImagesUser', {
            user: req.session.data,
            images: images
        });

    }

    async deleteImage(req: Request, res: Response) {

        const id = Number(req.params.id);
        
        let rawData: any = [];
        const images: any[] = [];
        
        rawData = await Image.findAll({ where: { id: id } });
        
        rawData.forEach((data: { dataValues: { id: number; title: string; path: string }; }) => {
            images.push({
                id: data.dataValues.id,
                title: data.dataValues.title,
                path: data.dataValues.path
            })
        })
        
        const fs = require('fs');
        const pathImage = images[0].path;

        try {
            fs.unlinkSync(path.join(rootDir, 'public', 'uploads', pathImage));
            await Image.destroy({
                where: {
                    id: id
                }
            });
            res.redirect('/image');
        } catch (error) {
            console.log(error);
        }
    }

    showGallerysPage(req: Request, res: Response) {
        res.render('gallery/showGalleryMenu', {
            user: req.session.data
        });
    }

    showAddGallerysPage(req: Request, res: Response) {
        res.render('gallery/galleryAddPage', {
            user: req.session.data
        });
    }

    async addGallery(req: Request, res: Response) {

        const gallery = await Gallery.create({
            identification: req.body.identification,
            userId: req.session.data.id,
        });

        const lastAdded = await Gallery.findOne({
            limit: 1,
            order: [['id', 'DESC']]
        });

        res.render('gallery/galleryAddSuccess', {
            gallery: gallery,
            user: req.session.data
        });

    }

    async showGallerys(req: Request, res: Response) {

        let gallerys: any[] = [];

        gallerys = await Gallery.findAll({ where: { userId: req.session.data.id } });

        res.render('gallery/showGallery', {
            gallerys: gallerys,
            user: req.session.data
        });
    }

    // TO DO 
    async showGallerysImages(req: Request, res: Response) {

        const galleryId = Number(req.params.id);

        console.log("id imagem", galleryId)

        let rawData: any = [];
        let images: any = [];


        rawData = await Image.findAll({
            include: {
                model: Gallery,
                where: { id: galleryId }
            }
        });

        res.json(rawData)

    }

    async deleteGallery(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await Gallery.destroy({
                where: {
                    id: id
                }
            });
            res.redirect('/gallerys');
        } catch (error) {
            console.log(error);
        }
    }

    async linkImageAndGalleryPage(req: Request, res: Response) {

        const imageId = Number(req.params.id);
        const userId = Number(req.session.data.id);

        let image: any[] = [];

        image = await Image.findAll({
            where: { id: imageId }
        });

        let rawData: any[] = [];
        let gallerys: any[] = [];

        rawData = await Gallery.findAll({ where: { userId: userId } });

        rawData.forEach((data: { dataValues: { id: number; identification: string }; }) => {
            gallerys.push({
                id: data.dataValues.id,
                identification: data.dataValues.identification,
            })
        })

        console.log(gallerys)

        res.render('gallery/linkImageAndGalleryPage', { imageId, image, gallerys, user: req.session.data });

    }

    // to do

    async linkImageAndGallery(req: Request, res: Response) {

        const imageId = Number(req.body.imageId);
        const galleryId = Number(req.body.galleryId);

        const image = Image.findOne({ where: { id: imageId } });
        const gallery = Gallery.findOne({ where: { id: galleryId } });

        let add;

        try {
            add = await (gallery as any).addImage(image, { through: {} });
            console.log(add);
        } catch (error) {
            console.log(error);
        }

        res.json(add)

    }

}