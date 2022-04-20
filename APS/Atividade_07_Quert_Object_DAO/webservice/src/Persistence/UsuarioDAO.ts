import { DAO } from './DAO'
import { Usuario } from './../Model/Usuario'

export class UsuarioDAO extends DAO {

  constructor() {
    super('usuarios')
  }

  add(usuario: Usuario) {
    const {nome, sobrenome} = usuario
    super.add({nome, sobrenome})
  }

  update(usuario: Usuario, id: number) {
    const { nome, sobrenome } = usuario
    super.updateById({ nome, sobrenome }, id)
  }

}
