import { entidades } from "./entidades";

export class Usuario extends entidades {

  readonly sobrenome: string

  constructor(codigo: number, nome: string, sobrenome: string) {
    super(codigo, nome)
    this.sobrenome = sobrenome
  }

}
