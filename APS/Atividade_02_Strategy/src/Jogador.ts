import { Tipo } from './Tipo';
import { IArma } from './Arma'
import { Desarmado } from './Desarmado';
export class Jogador {

  readonly nome: string
  readonly tipo: Tipo
  vida: number
  arma: IArma

  constructor(nome: string, tipo: Tipo = Tipo.Guerreiro, vida: number = 100) {
    this.nome = nome
    this.tipo = tipo
    this.vida = vida
    this.arma = new Desarmado()
  }

  pega(arma: IArma): void {
    console.info(`${this.nome} pegou ${arma.nome}`)
    this.arma = arma
  }

  soltaArma(arma: IArma): void {
    if (this.arma.nome === 'desarmado') {
      console.info(`${this.nome} já está ${this.arma.nome}`)
    } else {
      console.info(`${this.nome} soltou ${this.arma.nome}`)
      this.arma = new Desarmado()
    }
  }

  ataca(outro: Jogador): void {
    if (this.arma.nome === 'desarmado') {
      console.info(`${this.nome} não pode atacar, está ${this.arma.nome}`)
    } else if (this.arma.nome !== 'poção de cura' && this.nome !== this.nome) {
       console.info(`${this.nome} ataca ${outro.nome} com ${this.arma.nome}`)
      }
      if (this.arma.nome === 'poção de cura' && this.nome === this.nome) {
        console.info(`${this.nome} usou ${this.arma.nome}`)
       outro.vida = outro.vida + this.arma.ataca(this)
    } else {
       outro.vida = outro.vida - this.arma.ataca(this)
    }
  }
}
