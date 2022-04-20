import { Request, Response } from "express";
import { Category, ICategory } from "../models/Category";
import { Item, IItem } from "../models/Item";

export class categoryController {

    listCategory(request: Request, response: Response): void {
        const categorys = Category.listCategorys();
        console.log("lista", {categorys});
        response.render('categoryList', {categorys});
    }
    
    categoryForm(request: Request, response: Response): void {
        response.render('categoryForm');
    }

    addCategory(request: Request, response: Response): void {
        const { titulo, descricao } = request.body;
        const category = new Category(titulo, descricao);
        category.saveCategory();
        response.redirect('/categorias/lista');
    }

    detailCategory(request: Request, response: Response): void{
        try {
            let id = Number(request.params.id);
            const idVet = id;
            const categorysLength = Category.listCategorys().length;
            const itens = Item.listAllItems();
            if (id >= 0 && id <= categorysLength) {
                const category = Category.getById(id);
                id = category.id;
                response.render('categoryDetails', { category, itens, id, idVet });
            } else {
                throw Error();
            }
        } catch (error) {
            response.status(404).render('404');
        }
    }

    deleteByCategory(request: Request, response: Response): void{
        try {
            const id = Number(request.params.id);
            Category.deleteById(id);
            response.redirect('/categorias/lista');
        } catch (error) {
            response.status(404).render('404');
        }
    }

    sortCategory(request: Request, response: Response): void{
        const id = Number(request.params.id);
        const categorys = Category.categorySort();
        const itens = Item.listAllItems();
        
        let qtdItensPorCatId: Array<any> = [];
                for (let iCat = 0; iCat < Category.listCategorys().length; iCat++) {
                    qtdItensPorCatId[iCat] = 0;
                    for (let iIt = 0; iIt < Item.listAllItems().length; iIt++) {
                        const idCat = Number(categorys[iCat].id);
                        const itemIdCat = Number(itens[iIt].idCategoria);
                        if (itemIdCat == idCat) {
                            qtdItensPorCatId[iCat] = Number(qtdItensPorCatId[iCat] + 1);
                        }
                    } 
                }
                let newCategorys = categorys.map((categorys, pos) => {
                    const newCat = {
                        id: categorys.id,
                        titulo: categorys.titulo,
                        descricao: categorys.descricao,
                        data: categorys.data,
                        qtdItens: Number(qtdItensPorCatId[pos])
                    }
                    return newCat;
                });

        switch (id) {
            case 1:
                categorys.sort((category1, category2) => {
                    let cat1 = category1.titulo.toUpperCase();
                    let cat2 = category2.titulo.toUpperCase();
                    return cat1 == cat2 ? 0 : cat1 > cat2 ? 1 : -1;
                });
                response.render('categoryList', {categorys});
                break;
            case 2:
                categorys.sort((category1, category2) => {
                    let cat1 = category1.titulo.toUpperCase();
                    let cat2 = category2.titulo.toUpperCase();
                    return cat1 == cat2 ? 0 : cat1 < cat2 ? 1 : -1;
                });
                response.render('categoryList', {categorys});
                break;
            case 3:
                categorys.sort((category1, category2) => {
                    let cat1 = Number(category1.data);
                    let cat2 = Number(category2.data);
                    return cat1 - cat2;
                });
                response.render('categoryList', {categorys});
                break;
            case 4:
                categorys.sort((category1, category2) => {
                    let cat1 = Number(category1.data);
                    let cat2 = Number(category2.data);
                    return cat2 - cat1;
                });
                response.render('categoryList', {categorys});
                break;
            case 5:
                if(itens.length <= 0) {
                    response.render('categoryList', {categorys});
                } else {
                    newCategorys.sort((category1, category2) => {
                        let cat1 = Number(category1.qtdItens);
                        let cat2 = Number(category2.qtdItens);
                        return cat1 - cat2;
                    });
                    const categorys = newCategorys.map((newCategorys) => {
                        const newCat = {
                            titulo: newCategorys.titulo,
                            descricao: newCategorys.descricao,
                            data: newCategorys.data,
                            id: newCategorys.id
                        }
                        return newCat;
                        }
                    );
                    Category.categorySortItem(categorys);
                    response.render('categoryList', {categorys});
                }
                break;
            case 6:
                if(itens.length <= 0) {
                    response.render('categoryList', {categorys});
                } else {
                    newCategorys.sort((category1, category2) => {
                        let cat1 = Number(category1.qtdItens);
                        let cat2 = Number(category2.qtdItens);
                        return cat2 - cat1;
                    });
                    const categorys = newCategorys.map((newCategorys) => {
                        const newCat = {
                            titulo: newCategorys.titulo,
                            descricao: newCategorys.descricao,
                            data: newCategorys.data,
                            id: newCategorys.id
                        }
                        return newCat;
                        }
                    );
                    Category.categorySortItem(categorys);
                    response.render('categoryList', {categorys});
                }
                break;
            default:
                console.log("Tipo de Ordenação não encontrada!");
                break;
        }
        
    }

}