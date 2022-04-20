import { Produto } from "./Produto";

export interface IObservadorCompraProduto {
  quandoCompra(produtos: Produto[]): void
}
