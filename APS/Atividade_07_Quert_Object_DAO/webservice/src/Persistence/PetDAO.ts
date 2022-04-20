import { DAO } from './DAO'
import { Pet } from './../Model/Pet'

export class PetDAO extends DAO {

  constructor() {
    super('pets')
  }

  add(pet: Pet) {
    const {nome, especie} = pet
    super.add({nome, especie})
  }

  update(pet: Pet, id: number) {
    const { nome, especie } = pet
    super.updateById({ nome, especie }, id)
  }

}
