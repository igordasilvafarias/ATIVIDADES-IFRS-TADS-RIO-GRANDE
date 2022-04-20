import { Alimento } from './Alimento'
import { AlimentoBuilder } from './AlimentoBuilder';
import { Diretor } from './Diretor';

const cereal = new Alimento('Marmita', 400, 343.3, 52.1, 9.6, 25.3, 0.145, 0.3, 0, 5.5)

console.log(cereal);
console.log(`${cereal}`) // toString

const alimentoBuilder = new AlimentoBuilder()
const diretor = new Diretor(alimentoBuilder)
diretor.makeMarmita()
const alimento = alimentoBuilder.getResult()

console.log(alimento);
console.log(`${alimento}`) // toString

alimentoBuilder.reset()
diretor.makeAlaMinuta()
const alimento2 = alimentoBuilder.getResult()

console.log(alimento2);
console.log(`${alimento2}`) // toString

alimentoBuilder.reset()
diretor.makeChurrasco()
const alimento3 = alimentoBuilder.getResult()

console.log(alimento3);
console.log(`${alimento3}`) // toString
