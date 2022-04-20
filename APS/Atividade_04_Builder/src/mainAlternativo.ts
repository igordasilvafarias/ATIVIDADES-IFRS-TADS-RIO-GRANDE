import { AlimentoAlternativo } from './AlimentoAlternativo'
import { AlimentoBuilderAlternativo } from './AlimentoBuilderAlternativo';

//const cereal = new AlimentoAlternativo('Marmita', 400, 343.3, 52.1, 9.6, 25.3, 0.145, 0.3, 0, 5.5)

//console.log(cereal);
//console.log(`${cereal}`) // toString

const builder = new AlimentoBuilderAlternativo()

const alimento1 = builder.descricao('Ala Minuta').informacoesNutricionais({ porcao: 500, valorEnergetico: 645.3, carboidratos: 82.6, fibras: 3.4, proteinas: 89.4, sodio: 0.245, gordurasSaturadas: 1.6, gordurasTrans: 0.2, gordurasTotais: 11.2}).getResult()

console.log(alimento1);
console.log(`${alimento1}`) // toString

const alimento2 = builder.reset().descricao('Marmita').informacoesNutricionais({ porcao: 400, valorEnergetico: 343.3, carboidratos: 52.1, fibras: 9.6, proteinas: 25.3, sodio: 0.145, gordurasSaturadas: 0.3, gordurasTrans: 0, gordurasTotais: 5.5}).getResult()
