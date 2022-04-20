import db from "../config/conexaoSqlite";

export enum ItemSituation {
    DONE = 'done',
    UNDONE = 'undone'
}

export interface IItem {
    id: number,
    name: string,
    description: string,
    publishedDate: number,
    taskDeadline: number,
    finishedDate: number,
    updatedDate: number,
    userID: number,
    situation: string
}

export class Item implements IItem {
    id = 0;
    name: string;
    description: string;
    publishedDate: number;
    taskDeadline: number;
    finishedDate: number;
    updatedDate: number;
    userID: number;
    situation: string;

    constructor(name: string, description: string, userID: number, publishedDate: number, taskDeadline: number) {
        this.name = name;
        this.description = description;
        this.publishedDate = 0;
        this.taskDeadline = 0;
        this.finishedDate = 0;
        this.updatedDate = 0;
        this.userID = userID;
        this.situation = ItemSituation.UNDONE;
    }

    static listAll(): Promise<IItem[]> {
        const list: IItem[] = new Array();
        return new Promise<IItem[]>((resolve, reject) => {
            db.all('SELECT * FROM item', [], (error, rows) => {
                if(error) {
                    console.log("Error Select User", error);
                    reject();
                }
                rows.forEach(itens => {
                    list.push({
                        id: itens.id,
                        name: itens.name,
                        description: itens.description,
                        publishedDate: itens.publishedDate,
                        taskDeadline: itens.taskDeadline,
                        userID: itens.userID,
                        finishedDate: itens.finishedDate,
                        updatedDate: itens.updatedDate,
                        situation: itens.situation
                    });
                });
                resolve(list);
            });
        });
    }

    static save(newItem:IItem, userID: number, hourpublished: string, hourtaskDeadline: string): Promise<void> {
        /* inserir excecao para data de deadline menor q a inicial */

        return new Promise<void>((resolve, reject) => {

            const datePublishedDate = new String(newItem.publishedDate).split('/').reverse().join('-');
            const dateHourPublished = datePublishedDate.concat(' ', hourpublished);
            newItem.publishedDate = new Date(dateHourPublished).getTime();

            const dateTaskDeadline = new String(newItem.taskDeadline).split('/').reverse().join('-');
            const dateHourTaskDeadline = dateTaskDeadline.concat(' ', hourtaskDeadline);
            newItem.taskDeadline = new Date(dateHourTaskDeadline).getTime();

            newItem.finishedDate = 0;
            newItem.updatedDate = 0;

            newItem.situation = ItemSituation.UNDONE;

            let sql = `INSERT INTO item (name, description, publishedDate, taskDeadline, finishedDate, updatedDate, userID, situation) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`
            db.run(sql, [newItem.name, newItem.description, newItem.publishedDate, newItem.taskDeadline, newItem.finishedDate, newItem.updatedDate, userID, newItem.situation], (err) => {
                if(err) {
                    console.log("ERROR", err);
                    reject();
                }
                console.log("ADICIONADO COM SUCESSO");
                resolve();
            });
        }); 
    }

    static getById(id: number): Promise<IItem> {
        return new Promise<IItem>((resolve, reject) => {
            const sql = `SELECT * FROM item WHERE item.id = ${id};`
            db.all(sql, (error, rows) => {
                if(error){
                    console.log(error);
                    reject();
                }
                const item: IItem = {
                    ...rows[0],
                    publishedData: new Date(rows[0].publishedData),
                    taskDeadline: new Date(rows[0].taskDeadline),
                    finishedData: new Date(rows[0].finishedData),
                    updatedData: new Date(rows[0].updatedData)
                }
                resolve(item);
            });
        });
    }

    static deleteById(id: Number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const sql = `DELETE FROM item WHERE item.id = ?;`;
            db.run(sql, [id], (error) => {
                if (error) {
                    console.log("ERROR:", error);
                    reject(error);
                }
                resolve();
                console.log("Item deletado com sucesso!");
            });
        });
    }

    static updateSituation(item: IItem): Promise<void> {
        const finishedDate = new Date().getTime();
        item.situation = ItemSituation.DONE;
        return new Promise((resolve, reject) => {
            const sql = `UPDATE item SET finishedDate = ?, situation = ? WHERE id = ?;`;
            db.run(sql, [finishedDate, item.situation, item.id], error => {
                if(error){
                    console.log("erro situation update", error);
                    reject(error);
                }
                resolve();
                console.log("Atualizado para Finalizado o TODO!")
            });
        });
    }

    static update(item: IItem, dateTask: string, hourtask: string): Promise<void> {

        const dateTaskDeadline = new String(dateTask).split('/').reverse().join('-');
        const dateHourTaskDeadline = dateTaskDeadline.concat(' ', hourtask);
        item.taskDeadline = new Date(dateHourTaskDeadline).getTime();

        const updatedDate = new Date().getTime();

        return new Promise((resolve, reject) => {
            const sql = `UPDATE item SET name = ?, description = ?, taskDeadline = ?, updatedDate = ? WHERE item.id = ?;`;
            db.run(sql, [item.name, item.description, item.taskDeadline, updatedDate, item.id], error => {
                if(error){
                    console.log("erro update", error)
                    reject(error);
                }
                resolve();
                console.log("Atualizado TODO");
            });
        });
    }

    static listAllOffSet(page: Number, limit: Number): Promise<IItem[]> {
        const list: IItem[] = new Array();
        return new Promise<IItem[]>((resolve, reject) => {
            db.all(`SELECT * FROM item ORDER BY item.userID ASC LIMIT '${limit}' OFFSET '${page}'`, [], (error, rows) => {
                if(error) {
                    console.log("Error Select item offset", error);
                    reject();
                }
                rows.forEach(itens => {
                    list.push({
                        id: itens.id,
                        name: itens.name,
                        description: itens.description,
                        publishedDate: itens.publishedDate,
                        taskDeadline: itens.taskDeadline,
                        userID: itens.userID,
                        finishedDate: itens.finishedDate,
                        updatedDate: itens.updatedDate,
                        situation: itens.situation
                    });
                });
                resolve(list);
            });
        });
    }

    static listAllOffSetByUser(page: Number, limit: Number, id: Number): Promise<IItem[]> {
        const list: IItem[] = new Array();
        return new Promise<IItem[]>((resolve, reject) => {
            db.all(`SELECT * FROM item WHERE item.userID = '${id}' ORDER BY item.publishedDate ASC LIMIT '${limit}' OFFSET '${page}'`, [], (error, rows) => {
                if(error) {
                    console.log("Error Select item offset by user", error);
                    reject();
                }
                rows.forEach(itens => {
                    list.push({
                        id: itens.id,
                        name: itens.name,
                        description: itens.description,
                        publishedDate: itens.publishedDate,
                        taskDeadline: itens.taskDeadline,
                        userID: itens.userID,
                        finishedDate: itens.finishedDate,
                        updatedDate: itens.updatedDate,
                        situation: itens.situation
                    });
                });
                resolve(list);
            });
        });
    }

}