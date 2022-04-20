import { IObservador } from './IObsevador'
import { Produto } from './Produto'

export class Logger implements IObservador{
  quandoAdiciona(produto: Produto): void {
    console.info(`LOGGER: ${produto.descricao} foi adicionado`)
  }
  quandoRemove(produto: Produto): void {
    console.info(`LOGGER: ${produto.descricao} foi removido`)
  }
  quandoCompra(produtos: Produto[]): void {
    console.info(`LOGGER: ${produtos.length} comprado(s)`)
  }
  quandoAbandona(produtos: Produto[]): void {
    console.info(`LOGGER: ${produtos.length} abandonado(s)`)
  }
}
