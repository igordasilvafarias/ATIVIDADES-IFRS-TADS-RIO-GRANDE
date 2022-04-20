import { Produto } from './Produto'

export class Pedido {
  readonly produtos: Produto[]
  constructor(produtos: Produto[]) {
    this.produtos = produtos
  }
}
