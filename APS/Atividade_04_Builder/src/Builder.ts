export interface Builder {

  reset(): Builder
  descricao(descricao: string): Builder
  porcao(porcao: number): Builder
  valorEnergetico(valorEnergetico: number): Builder
  carboidratos(carboidratos: number): Builder
  fibras(fibras: number): Builder
  proteinas(proteinas: number): Builder
  sodio(sodio: number): Builder
  gordurasSaturadas(gordurasSaturadas: number): Builder
  gordurasTrans(gordurasTrans: number): Builder
  gordurasTotais(gordurasTotais: number): Builder

}
