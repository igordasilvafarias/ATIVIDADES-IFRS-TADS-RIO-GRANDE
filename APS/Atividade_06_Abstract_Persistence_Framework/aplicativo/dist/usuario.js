"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarioCommand = exports.novoUsuarioCommand = exports.todosUsuariosCommand = void 0;
var sqlite3_1 = require("sqlite3");
var dataBaseCommands_1 = require("./dataBaseCommands");
var db = new sqlite3_1.Database('./banco.db');
// GET /usuarios
exports.todosUsuariosCommand = {
    execute: function (req, resp) {
        dataBaseCommands_1.selectAll(resp, 'usuarios');
    }
};
exports.novoUsuarioCommand = {
    execute: function (req, resp) {
        var corpo = '';
        req.on('data', function (parte) { return corpo += parte; });
        req.on('end', function () {
            var usuario = JSON.parse(corpo);
            var sql = 'INSERT INTO usuarios (nome, sobrenome) VALUES (?, ?)';
            var statement = db.prepare(sql);
            statement.run(usuario.nome, usuario.sobrenome);
            statement.finalize(function () {
                resp.writeHead(201, { 'Content-Type': 'text/plain' });
                resp.end('Usuario Criado');
            });
        });
    }
};
exports.deleteUsuarioCommand = {
    execute: function (req, resp) {
        var id = req.url;
        console.log(id);
    }
};
//# sourceMappingURL=usuario.js.map