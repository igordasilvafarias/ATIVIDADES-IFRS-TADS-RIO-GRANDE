import { ICategory } from "./models/Category";
import { IItem } from "./models/Item";

export class FakeRepository {

    private static categorys: Array<ICategory> = [];

    private static itens: Array<IItem> = [];

    static listCategory(): Array<ICategory> {
        return FakeRepository.categorys;
    }

    static addCategory(category: ICategory): void {
        category.id = this.categorys.length + 1;
        FakeRepository.categorys.push(category);
    }

    static deleteCategory(id: number): void {
        FakeRepository.categorys.splice(id,1);
    }

    static saveItem(item: IItem): void {
        FakeRepository.itens.push(item);
    }

    static listItem(): Array<IItem> {
        return FakeRepository.itens;
    }

    static deleteItem(id: number): void {
        FakeRepository.itens.splice(id,1);
    }

    static newCategorys(categorys: Array<ICategory>): void {
        FakeRepository.categorys = categorys;
    }

}