import { IArma } from './Arma'
import { Jogador } from './Jogador'

export class Espada implements IArma {
  readonly nome = 'espada'
  ataca(outro: Jogador): number {
    if (outro.tipo === 'guerreiro') {
     return 20
    } else {
        return 10
    }
  }
}
