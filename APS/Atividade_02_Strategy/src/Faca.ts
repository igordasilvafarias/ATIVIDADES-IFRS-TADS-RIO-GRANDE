import { IArma } from './Arma'
import { Jogador } from './Jogador'

export class Faca implements IArma {
  readonly nome = 'faca'

  ataca(outro: Jogador): number {
    if ((outro.tipo === 'guerreiro' || outro.tipo === 'arqueiro')) {
     return 10
    } else {
       //if (outro.nome !== outro.nome) {
        return 5
      // }
      }
     // return 0
  }
}
