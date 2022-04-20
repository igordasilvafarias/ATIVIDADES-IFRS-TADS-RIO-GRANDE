import { Jogador } from './Jogador'
import { IArma } from './Arma'

export class PocaoCura implements IArma {
  readonly nome = 'poção de cura'
  ataca(outro: Jogador): number {
    return 10
  }

}
