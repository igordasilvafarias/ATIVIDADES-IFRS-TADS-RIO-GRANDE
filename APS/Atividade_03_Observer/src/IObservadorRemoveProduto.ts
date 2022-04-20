import { Produto } from "./Produto";

export interface IObservadorRemoveProduto {
  quandoRemove(p: Produto): void
}
