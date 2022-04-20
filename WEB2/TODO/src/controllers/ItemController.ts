import { User, UserRole } from "../models/User";
import { IItem, Item } from "../models/Item";
import { NextFunction, Request, Response } from "express";

export class ItemController {

    async listItems(request: Request, response: Response): Promise<void> {
        try {
            const itens = await Item.listAll();
            const role = request.session.data.role;
            if (role == UserRole.ADMIN) {
                const itens = await Item.listAll();
                const users = await User.listAll();
                const length = itens.length;
                response.render('itens/listAll', {itens, users, length});
            } else {
                if (role == UserRole.REGULAR) {
                    const length = itens.length;
                    const filterUserID = itens.filter(item => item.userID == request.session.data.id);
                    response.render('itens/itensList', {itens: filterUserID, length});
                }
            }
        } catch (error) {
            console.log("ERROR:", error);
            response.status(404).render('errors/404');
        }
    }

    showInsertTodoPage(request: Request, response: Response) {
        response.render('itens/insertTodoForm');
    }

    async insertTodo(request: Request, response: Response) {
        const newItem = request.body as IItem;
        const hourpublished = request.body.publishedHour;
        const hourtaskDeadline = request.body.taskDeadlineHour;
        const userID = Number(request.session.data?.id); 
        await Item.save(newItem, userID, hourpublished, hourtaskDeadline);
        response.redirect('/');
    }

    async detailTodo(request: Request, response: Response): Promise<void> {
        try {
            const id = Number(request.params.id);
            const item = await Item.getById(id);
            response.render('itens/itemDetail', {item, id});
        } catch (error) {
            response.status(404).render('errors/404');
        }
    }

    async deleteTodo(request: Request, response: Response): Promise<void> {
        try {
            const id = Number(request.params.id);
            await Item.deleteById(id);
            response.redirect('/itens/list');
        } catch (error) {
            response.status(404).render('errors/404');
        }
    }

    async updateTodoSituation(request: Request, response: Response): Promise<void>{
        try {
            const id = Number(request.params.id);
            const item = await Item.getById(id);
            await Item.updateSituation(item);
            response.redirect('/itens/list');
        } catch (error) {
            response.status(404).render('errors/404');
        }
    }

    async showUpdateTodoPage(request: Request, response: Response): Promise<void>{
        try {
            const id = Number(request.params.id);
            const item = await Item.getById(id);
            const solutionTaskDeadLine = new Date(item.taskDeadline).getTime();
            item.taskDeadline = solutionTaskDeadLine;
            response.render('itens/updateTodoPage', { item });
        } catch (error) {
            response.status(404).render('errors/404');
        }
    }

    async updateTodo(request: Request, response: Response): Promise<void>{
        try {
            const id = Number(request.params.id);
            const item = await Item.getById(id);
            item.name = request.body.name;
            item.description = request.body.description;
            const dateTask = request.body.taskDeadline;
            const hourtask = request.body.taskDeadlineHour;
            await Item.update(item, dateTask, hourtask);
            response.redirect('/itens/list');
        } catch (error) {
            response.status(404).render('errors/404');
        }
    }

    async listItemsPage(request: Request, response: Response): Promise<void> {

        let itens: IItem[] = new Array();
         
        let page: number = Number(request.query.page);
        let limit: number = Number(request.query.limit);
        
        if(page != 0 && limit != 5){
            page = 0;
            limit = 5;
            itens = await Item.listAllOffSet(0, 5);
        } else {
            itens = await Item.listAllOffSet(page, limit);
            }

        try {
            const role = request.session.data.role;
            if (role == UserRole.ADMIN) {
                const length = (await Item.listAll()).length;
                const users = await User.listAll();
                response.render('itens/listAll', {itens, users, length});
            } else {
                if (role == UserRole.REGULAR) {
                    const itensLength = await Item.listAll();
                    const filterUserID = itensLength.filter(item => item.userID == request.session.data.id);
                    const length = filterUserID.length;

                    const itens = await Item.listAllOffSetByUser(page, limit, request.session.data.id);
                    response.render('itens/itensList', {itens, length});
                }
            }
        } catch (error) {
            console.log("ERROR:", error);
            response.status(404).render('errors/404');
        }
    }

}