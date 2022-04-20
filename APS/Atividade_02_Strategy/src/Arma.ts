import { Jogador } from "./Jogador";

export interface IArma {
  readonly nome: string
  ataca(outro: Jogador): number
}
