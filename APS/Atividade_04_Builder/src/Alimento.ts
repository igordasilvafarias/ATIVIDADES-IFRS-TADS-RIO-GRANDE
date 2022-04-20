export class Alimento {

  descricao: string
  porcao: number // gramas
  valorEnergetico: number // Kcal
  carboidratos: number // gramas
  fibras: number // gramas
  proteinas: number // gramas
  sodio: number // gramas
  gordurasSaturadas: number // gramas
  gordurasTrans: number // gramas
  gordurasTotais: number // gramas

  constructor(descricao: string, porcao: number, valorEnergetico: number, carboidratos: number, fibras: number, proteinas: number, sodio: number, gordurasSaturadas: number, gordurasTrans: number, gordurasTotais: number) {
    this.descricao = descricao
    this.porcao = porcao
    this.valorEnergetico = valorEnergetico
    this.carboidratos = carboidratos
    this.fibras = fibras
    this.proteinas = proteinas
    this.sodio = sodio
    this.gordurasSaturadas = gordurasSaturadas
    this.gordurasTrans = gordurasTrans
    this.gordurasTotais = gordurasTotais
  }

  toString() {
    return `Cada porção de ${this.porcao}g de ${this.descricao} contém:\n` +
      `Valor Energético: ${this.valorEnergetico} Kcal\n` +
      `Carboidratos: ${this.carboidratos} g\n` +
      `Fibras: ${this.fibras} g\n` +
      `Proteínas: ${this.proteinas} g\n` +
      `Sódio: ${this.sodio} g\n` +
      `Gorduras Saturadas: ${this.gordurasSaturadas} g\n` +
      `Gorduras Trans: ${this.gordurasTrans} g\n` +
      `Gorduras Totais: ${this.gordurasTotais} g`
  }

}
