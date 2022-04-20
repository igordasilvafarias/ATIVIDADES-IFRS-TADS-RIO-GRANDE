import { Carrinho } from './Carrinho'
import { Produto } from './Produto'
import { Pedido } from './Pedido'
import { Logger } from './Logger'
import { ListadeDesejos } from './ListadeDesejos'
import { Marketing } from './Marketing'

console.log('ok')

const p1 = new Produto(1, 'Tripé Para Celular Flexivel')
const p2 = new Produto(2, 'Carregador de parede universal 2.1A, 2 portas USB, bivolt')
const p3 = new Produto(3, 'Caixa Multimidia Portatil Go 2, JBL')
const p4 = new Produto(4, 'Bateria Externa Carga Rápida 10,000Mah USB Tipo C')
const p5 = new Produto(5, 'Fones de Ouvido Xiaomi Redmi AirDots')
const p6 = new Produto(6, 'Máquina De Café Espresso Coffee Cream ')
const p7 = new Produto(7, 'Parafusadeira/furadeira De Impacto 1⁄2” (13mm) 20v Max')
const p8 = new Produto(8, 'Honorall Full HD 1080 P Webcam USB Mini Câmera')

const carrinho = new Carrinho()
carrinho.adicionaObservador(new Logger())
carrinho.adiciona(p1)
carrinho.adiciona(p2)
console.log(carrinho.produtos)
carrinho.abandona()
console.log(carrinho.produtos)
carrinho.adicionaObservador(new Marketing())
carrinho.adiciona(p3)
carrinho.adiciona(p4)
carrinho.remove(p3)
console.log(carrinho.produtos)
carrinho.adiciona(p5)
const pedido = carrinho.compra()
console.log(pedido.produtos)
console.log(carrinho.produtos)

const carrinho2 = new Carrinho()
carrinho2.adiciona(p7)
carrinho2.adiciona(p8)
carrinho2.abandona()
const pedido2 = carrinho2.compra()
if (pedido2.produtos.length === 0) {
  console.log('Carrinho vazio')
}
console.log("*** LISTA DE DESEJOS TESTES ***")
const listadedesejos = new ListadeDesejos()
listadedesejos.adiciona(p1)
listadedesejos.adiciona(p2)
listadedesejos.adiciona(p3)
console.log(listadedesejos.produtos)
listadedesejos.remove(p3)
console.log(listadedesejos.produtos)
listadedesejos.excluirLista()
console.log(listadedesejos.produtos)
const obsLogger = new Logger()
listadedesejos.adicionaObservador(obsLogger)
listadedesejos.adiciona(p4)
listadedesejos.adiciona(p5)

console.info(listadedesejos.observadores)
listadedesejos.removeObservador(obsLogger)
console.info(listadedesejos.observadores)
