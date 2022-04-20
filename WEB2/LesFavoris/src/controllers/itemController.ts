import { Item } from "../models/Item";
import { Request, Response } from "express";

export class itemController {
    
    listItems(request: Request, response: Response): void {
        const itens = Item.listAllItems();
        response.render('itemList', {itens});
    }

    itemForm(request: Request, response: Response): void {
        try {
            const id = Number(request.params.id);
            const idVet = Number(request.params.idVet);
            response.render('itemForm', {id, idVet});
        } catch (error) {
            response.status(404).render('404');
        }
    }

    addItem(request: Request, response: Response): void {
        let {nome, id, idVet} = request.body;
        idVet = Number(request.params.idVet);
        const idCategoria = Number(request.params.id);
        const item = new Item(nome, idCategoria);
        item.saveItem();
        response.redirect(`/categorias/${idVet}`);
    }

    detailItemById(request: Request, response: Response): void{
        try {
            const id = Number(request.params.id);
            const idVet = Number(request.params.idVet);
            const itemLength = Item.listAllItems().length;
            if (id >= 0 && id <= itemLength) {
                const item = Item.getById(id);
                response.render('itemDetails', { item, id, idVet });
            } else {
                throw Error();
            }
        } catch (error) {
            response.status(404).render('404');
        }
    }

    deleteByIdItem(request: Request, response: Response): void{
        try {
            const id = Number(request.params.id);
            const idVet = Number(request.params.idVet);
            Item.deleteById(id);
            response.redirect(`/categorias/${idVet}`);
        } catch (error) {
            response.status(404).render('404');
        }
    }

}

