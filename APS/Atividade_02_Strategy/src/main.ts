import { Arco } from './Arco';
import { Espada } from './Espada';
import { Faca } from './Faca';
import { Jogador } from './Jogador'
import { Pocao } from './Pocao';
import { PocaoCura } from './PocaoCura';
import { Tipo } from './Tipo';

const jog1 = new Jogador('Dave', Tipo.Guerreiro, 90)

console.log(jog1.nome) // Dave
console.log(jog1.tipo) // guerreiro
console.log(jog1.vida) // 90

const jog2 = new Jogador('John', Tipo.Mago)

console.log(jog2.nome) // John
console.log(jog2.tipo) // mago
console.log(jog2.vida) // 100

console.log(jog1.arma.nome) // desarmado
console.log(jog2.arma.nome) // desarmado

jog1.pega(new Faca())
console.log(jog1.arma.nome) // faca

jog2.pega(new Espada())
console.log(jog2.arma.nome) // espada

jog1.ataca(jog2) // Dave ataca John com faca
console.log(jog2.vida) // 90

jog2.ataca(jog1) // John ataca Dave com espada
console.log(jog1.vida) // 80

jog1.pega(new Espada())
jog1.ataca(jog2) // Dave ataca John com espada
console.log(jog2.vida) // 70

jog1.soltaArma(jog1.arma)
console.log(jog1.arma.nome) // desarmado
jog1.ataca(jog2) // Dave está desarmado
console.log(jog2.vida) // 70

jog2.pega(new Pocao())
jog2.ataca(jog1) // John ataca Dave com poção
console.log(jog1.vida) // 60

const jog3 = new Jogador('Peter', Tipo.Arqueiro, 70)
console.log(jog3.arma.nome) // desarmado
jog3.pega(new Arco())
jog3.ataca(jog1)
console.log(jog1.vida) // 40
jog3.pega(new Faca())
jog3.ataca(jog1)
console.log(jog1.vida) // 30
jog1.pega(new PocaoCura()) // usando poção de cura
console.log(jog1.vida) // 30
jog1.ataca(jog1)
console.log(jog1.vida) // 40
jog1.soltaArma(jog1.arma)
console.log(jog1.arma.nome) // desarmado
jog1.soltaArma(jog1.arma) // jogador já esta desarmado

// Jogador tenta se atacar - não tem dano
console.log(jog3.vida) // 70
jog3.pega(new Faca())
jog3.ataca(jog3)
console.log(jog3.vida) // 70
