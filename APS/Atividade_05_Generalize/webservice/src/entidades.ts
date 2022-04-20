export abstract class entidades {

  readonly codigo: number
  readonly nome: string

  constructor(codigo: number, nome: string) {
    this.codigo = codigo
    this.nome = nome
  }

}
