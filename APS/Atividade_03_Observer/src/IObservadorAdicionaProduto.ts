import { Produto } from "./Produto"

export interface IObservadorAdicionaProduto {
  quandoAdiciona(p: Produto): void
}
