import { FakeRepository } from "../FakeRepository";

export interface ICategory {
    titulo: string;
    descricao: string;
    data: Date;
    id: number;
}

export class Category implements ICategory {
    
    id = 0;
    titulo: string;
    descricao: string;
    data: Date;

    constructor(titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = new Date();
    }

    saveCategory(): void {
        FakeRepository.addCategory(this);
    }

    static listCategorys(): Array<ICategory> {
        return FakeRepository.listCategory();
    }

    static getById(id: number): ICategory {
        return FakeRepository.listCategory()[id];
    }

    static deleteById(id: number): void {
        FakeRepository.deleteCategory(id);
    }

    static categorySort(): Array<ICategory> {
        return FakeRepository.listCategory();
    }

    static categorySortItem(newCategorys: Array<ICategory>): void {
        FakeRepository.newCategorys(newCategorys);
    }

}