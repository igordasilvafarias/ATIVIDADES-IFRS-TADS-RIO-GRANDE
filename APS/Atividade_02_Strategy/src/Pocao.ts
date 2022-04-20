import { IArma } from './Arma'
import { Jogador } from './Jogador'

export class Pocao implements IArma {
  readonly nome = 'poção'
  ataca(outro: Jogador): number {
    if (outro.tipo === 'mago') {
      return 20
    } else {
       return 10
    }
  }
}
