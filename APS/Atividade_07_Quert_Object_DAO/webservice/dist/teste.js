"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO_1 = require("./Persistence/DAO");
var UsuarioDAO_1 = require("./Persistence/UsuarioDAO");
var Usuario_1 = require("./Model/Usuario");
var dao = new DAO_1.DAO('usuarios');
var rows = dao.findAll();
console.log(rows);
dao.add({ nome: 'Jose', sobrenome: 'Ferreira' });
var usuario = new Usuario_1.Usuario('F', 'Soares');
var daoUsuario = new UsuarioDAO_1.UsuarioDAO();
//console.log(daoUsuario.findAll())
if (usuario.isValid) {
    daoUsuario.add(usuario);
}
else {
    console.log(usuario.erros);
}
var id = 2;
//const row = dao.findById(id)
//console.log(row)
//# sourceMappingURL=teste.js.map