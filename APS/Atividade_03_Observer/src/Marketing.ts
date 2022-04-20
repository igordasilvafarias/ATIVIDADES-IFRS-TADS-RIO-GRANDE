import { IObservador } from './IObsevador'
import { Produto } from './Produto'

export class Marketing implements IObservador{
  quandoAdiciona(produto: Produto): void {
    console.info(`MARKETING: ${produto.descricao} foi adicionado`)
  }
  quandoRemove(produto: Produto): void {
    console.info(`MARKETING: ${produto.descricao} foi removido`)
  }
  quandoCompra(produtos: Produto[]): void {
    console.info(`MARKETING: ${produtos.length} comprado(s)`)
  }
  quandoAbandona(produtos: Produto[]): void {
    console.info(`MARKETING: ${produtos.length} abandonado(s)`)
  }
}
