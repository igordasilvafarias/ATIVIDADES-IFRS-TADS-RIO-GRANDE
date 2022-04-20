import { Produto } from './Produto'
import { Pedido } from './Pedido'
import { IObservador } from './IObsevador'

// API
export abstract class ClasseAbstrata {
  readonly produtos: Produto[] = []
  readonly observadores: IObservador[] = []

  adicionaObservador(observador: IObservador) {
    this.observadores.push(observador)
  }

  removeObservador(observador: IObservador) {
    const i = this.observadores.indexOf(observador)
    if (i >= 0) {
      this.observadores.splice(i, 1)
    }
  }

  // retrocompatível
  adiciona(produto: Produto) {
    this.notificaAdicao(produto)
    this.produtos.push(produto)
  }

  notificaAdicao(produto: Produto): void {
    for (const observador of this.observadores) {
      observador.quandoAdiciona(produto)
    }
  }

  remove(produto: Produto): void {
    const i = this.produtos.indexOf(produto)
    if (i >= 0) {
      this.notificaRemocao(produto)
      this.produtos.splice(i, 1)
    }
  }

  notificaRemocao(produto: Produto) {
    for (const observador of this.observadores) {
      observador.quandoRemove(produto)
    }
  }

  compra(): Pedido {
    const prod: Produto[] = [...this.produtos]
    this.notificaCompra(prod)
    const ped = new Pedido(prod)
    this.esvazia()
    return ped
  }

  notificaCompra(produtos: Produto[]) {
    for (const observador of this.observadores) {
      observador.quandoCompra(produtos)
    }
  }

  esvazia(): void {
    this.notificaAbandono(this.produtos)
    this.produtos.splice(0)
  }

  notificaAbandono(produtos: Produto[]) {
    for (const observador of this.observadores) {
      observador.quandoAbandona(produtos)
    }
  }

}
