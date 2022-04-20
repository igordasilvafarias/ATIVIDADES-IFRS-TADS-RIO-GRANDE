import { IArma } from './Arma'
import { Jogador } from './Jogador'

export class Arco implements IArma {
  readonly nome = 'arco'
  ataca(outro: Jogador): number {
    if (outro.tipo === 'arqueiro') {
      return 20
    } else {
      return 10
    }
  }
   teste(outro: Jogador): void {
    outro.vida -= 1
  }
}

