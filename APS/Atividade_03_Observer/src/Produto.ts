export class Produto {
  readonly codigo: number
  readonly descricao: string

  constructor(codigo: number, descricao: string) {
    this.codigo = codigo
    this.descricao = descricao
  }
}
