import { Builder } from "./Builder";

export class Diretor {
  private _builder: Builder

  constructor(builder: Builder) {
    this._builder = builder
    this._builder.reset()
  }

  makeMarmita(){
    this._builder.descricao('Marmita').porcao(400).valorEnergetico(343.3).carboidratos(52.1).
    fibras(9.6).proteinas(25.3).sodio(0.145).gordurasSaturadas(0.3).gordurasTrans(0).gordurasTotais(5.5)
  }

  makeAlaMinuta() {
    this._builder.descricao('Ala Minuta').porcao(500).valorEnergetico(645.3).carboidratos(82.6).
      fibras(3.4).proteinas(89.4).sodio(0.245).gordurasSaturadas(1.6).gordurasTrans(0.2).gordurasTotais(11.2)
  }

  makeChurrasco() {
    this._builder.descricao('Churrasco').porcao(600).valorEnergetico(456.2).carboidratos(43.7).
      fibras(18.9).proteinas(575.7).sodio(0.124).gordurasSaturadas(0.1).gordurasTrans(0).gordurasTotais(24.5)
  }

}
