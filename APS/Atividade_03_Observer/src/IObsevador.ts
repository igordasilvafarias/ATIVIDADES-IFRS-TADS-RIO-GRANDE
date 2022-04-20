import { IObservadorAbandonaProdutos } from "./IObservadorAbandonaProdutos";
import { IObservadorAdicionaProduto } from "./IObservadorAdicionaProduto";
import { IObservadorCompraProduto } from "./IObservadorCompraProdutos";
import { IObservadorRemoveProduto } from "./IObservadorRemoveProduto";
import { Produto } from "./Produto";

export class IObservador implements IObservadorAdicionaProduto, IObservadorRemoveProduto,
                                    IObservadorCompraProduto, IObservadorAbandonaProdutos {
  quandoAdiciona(produto: Produto): void {}
  quandoRemove(produto: Produto): void {}
  quandoCompra(produtos: Produto[]): void {}
  quandoAbandona(produtos: Produto[]): void {}
}
