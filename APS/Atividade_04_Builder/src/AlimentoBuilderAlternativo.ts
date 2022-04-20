import { AlimentoAlternativo } from "./AlimentoAlternativo";

export class AlimentoBuilderAlternativo {

  private _alimento: AlimentoAlternativo

  constructor() {
    this._alimento = new AlimentoAlternativo('', {porcao: 0, valorEnergetico: 0, carboidratos: 0, fibras: 0, proteinas: 0, sodio: 0, gordurasSaturadas: 0, gordurasTrans: 0, gordurasTotais: 0})
  }

  reset(): AlimentoBuilderAlternativo {
    this._alimento = new AlimentoAlternativo('', { porcao: 0, valorEnergetico: 0, carboidratos: 0, fibras: 0, proteinas: 0, sodio: 0, gordurasSaturadas: 0, gordurasTrans: 0, gordurasTotais: 0})
    return this
  }

  descricao(descricao: string): AlimentoBuilderAlternativo {
    this._alimento.descricao = descricao
    return this
  }

  informacoesNutricionais(informacoesNutricionais: IInformacoesNutricionaisAlimento): AlimentoBuilderAlternativo {
    this._alimento.informacoesNutricionais = informacoesNutricionais
    return this
  }

  getResult(): AlimentoAlternativo {
    return this._alimento
  }

}
