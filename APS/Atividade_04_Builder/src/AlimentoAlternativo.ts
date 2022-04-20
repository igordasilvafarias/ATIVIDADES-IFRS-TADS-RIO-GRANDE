export class AlimentoAlternativo {

  descricao: string
  informacoesNutricionais: IInformacoesNutricionaisAlimento

  constructor(descricao: string, informacoesNutricioanis: IInformacoesNutricionaisAlimento) {
    this.descricao = descricao
    this.informacoesNutricionais = informacoesNutricioanis
  }

  toString() {
    return `Cada porção de ${this.informacoesNutricionais.porcao}g de ${this.descricao} contém:\n` +
      `Valor Energético: ${this.informacoesNutricionais.valorEnergetico} Kcal\n` +
      `Carboidratos: ${this.informacoesNutricionais.carboidratos} g\n` +
      `Fibras: ${this.informacoesNutricionais.fibras} g\n` +
      `Proteínas: ${this.informacoesNutricionais.proteinas} g\n` +
      `Sódio: ${this.informacoesNutricionais.sodio} g\n` +
      `Gorduras Saturadas: ${this.informacoesNutricionais.gordurasSaturadas} g\n` +
      `Gorduras Trans: ${this.informacoesNutricionais.gordurasTrans} g\n` +
      `Gorduras Totais: ${this.informacoesNutricionais.gordurasTotais} g`
  }

}
