import { IArma } from './Arma'
import { Jogador } from './Jogador'

export class Desarmado implements IArma {
  readonly nome = 'desarmado'
  ataca(outro: Jogador): number {
    return 0
  }

}
