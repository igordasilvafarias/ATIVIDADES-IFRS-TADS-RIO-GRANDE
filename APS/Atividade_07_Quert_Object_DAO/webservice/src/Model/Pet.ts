import { PetDAO } from '../Persistence/PetDAO'
import { Model } from './Model'
import { Usuario } from "./Usuario"

const dao = new PetDAO()

export class Pet extends Model {

  id?: number
  nome: string
  especie?: string
  constructor(nome: string, especie?: string, id?: number) {
    super()
    // VALIDAR ANTES
    // if (nome.length < 2) {
    //   throw new Error(`Nome deve ter pelo menos 2 caracteres (recebido: ${nome})`)
    // }
    this.id = id
    this.nome = nome
    this.especie = especie
  }

  _validate(erros: string[]): void {
    if (this.nome.length < 2) {
      erros.push(`Nome deve ter pelo menos 2 caracteres`)
    }
  }

  // Active Record
  save(): boolean {
    if (this.isValid) {
      dao.add(this)
      return true
    } else {
      return false
    }
  }

  // Active Record
  static all(): Pet[] {
    return dao.findAll()
  }

  static findId(id: number): Pet {
    return dao.findById(id)
  }

  static remove(id: number) {
    return dao.deleteById(id)
  }

  update(id: number): boolean {
    if (this.isValid) {
      dao.updateById(this, id)
      return true
    } else {
      return false
    }
  }

}
