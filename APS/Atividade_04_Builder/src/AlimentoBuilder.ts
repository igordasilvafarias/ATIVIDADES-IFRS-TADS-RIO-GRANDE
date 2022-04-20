import { Alimento } from "./Alimento";
import { Builder } from "./Builder";

export class AlimentoBuilder implements Builder {

  private _alimento: Alimento

  constructor() {
    this._alimento = new Alimento('', 0, 0, 0, 0, 0, 0, 0, 0, 0)
  }

  reset(): Builder {
    this._alimento = new Alimento('', 0, 0, 0, 0, 0, 0, 0, 0, 0)
    return this
  }

  descricao(descricao: string): Builder {
    this._alimento.descricao = descricao
    return this
  }

  porcao(porcao: number): Builder {
    this._alimento.porcao = porcao
    return this
  }

  valorEnergetico(valorEnergetico: number): Builder {
    this._alimento.valorEnergetico = valorEnergetico
    return this
  }

  carboidratos(carboidratos: number): Builder {
    this._alimento.carboidratos = carboidratos
    return this
  }

  fibras(fibras: number): Builder {
    this._alimento.fibras = fibras
    return this
  }

  proteinas(proteinas: number): Builder {
    this._alimento.proteinas = proteinas
    return this
  }

  sodio(sodio: number): Builder {
    this._alimento.sodio = sodio
    return this
  }

  gordurasSaturadas(gordurasSaturadas: number): Builder {
    this._alimento.gordurasSaturadas = gordurasSaturadas
    return this
  }

  gordurasTrans(gordurasTrans: number): Builder {
    this._alimento.gordurasTrans = gordurasTrans
    return this
  }

  gordurasTotais(gordurasTotais: number): Builder {
    this._alimento.gordurasTotais = gordurasTotais
    return this
  }

  getResult(): Alimento {
    return this._alimento
  }

}
