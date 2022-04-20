import { Produto } from "./Produto";

export interface IObservadorAbandonaProdutos {
  quandoAbandona(produtos: Produto[]): void
}
