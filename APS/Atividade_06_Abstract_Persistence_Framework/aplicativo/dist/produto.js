"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.novoProdutoCommand = exports.todosProdutosCommand = void 0;
var sqlite3_1 = require("sqlite3");
var dataBaseCommands_1 = require("./dataBaseCommands");
var db = new sqlite3_1.Database('./banco.db');
// GET /produtos
exports.todosProdutosCommand = {
    execute: function (req, resp) {
        dataBaseCommands_1.selectAll(resp, 'produtos');
    }
};
exports.novoProdutoCommand = {
    execute: function (req, resp) {
        var corpo = '';
        req.on('data', function (parte) { return corpo += parte; });
        req.on('end', function () {
            var produto = JSON.parse(corpo);
            var sql = 'INSERT INTO produtos (nome, preco) VALUES (?, ?)';
            var statement = db.prepare(sql);
            statement.run(produto.nome, produto.preco);
            statement.finalize(function () {
                resp.writeHead(201, { 'Content-Type': 'text/plain' });
                resp.end('Produto Criado');
            });
        });
    }
};
//# sourceMappingURL=produto.js.map