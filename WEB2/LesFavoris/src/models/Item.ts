import { FakeRepository } from "../FakeRepository";

export interface IItem {
    nome: string;
    idCategoria: Number;
    data?: Date;
}

export class Item implements IItem {
    nome: string;
    idCategoria: Number;
    data: Date;

    constructor(nome: string, idCategoria: Number, data?: Date) {
        this.nome = nome;
        this.idCategoria = idCategoria;
        this.data = data ? data: new Date();
    }

    saveItem(): void {
        FakeRepository.saveItem(this);
    }

    static listAllItems(): Array<IItem> {
        return FakeRepository.listItem();
    }

    static getById(id: number): IItem {
        return FakeRepository.listItem()[id];
    }

    static deleteById(id: number): void {
        return FakeRepository.deleteItem(id);
    }

}