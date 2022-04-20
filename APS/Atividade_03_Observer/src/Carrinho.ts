import { ClasseAbstrata } from './ClasseAbstrata'

// API
export class Carrinho extends ClasseAbstrata{
  abandona(): void {
    this.esvazia()
  }
}
