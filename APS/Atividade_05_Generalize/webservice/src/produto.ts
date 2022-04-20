import { entidades } from "./entidades";

export class Produto extends entidades {

  readonly preco: number

  constructor(codigo: number, nome: string, preco: number) {
    super(codigo, nome)
    this.preco = preco
  }

}
