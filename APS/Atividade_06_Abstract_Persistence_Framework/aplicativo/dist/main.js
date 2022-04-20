"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var usuario_1 = require("./usuario");
var produto_1 = require("./produto");
var framework_1 = require("framework");
var controller = new framework_1.FrontController();
controller.register(framework_1.Method.GET, '/nada');
controller.register(framework_1.Method.GET, '/usuarios', usuario_1.todosUsuariosCommand);
controller.register(framework_1.Method.DELETE, '/usuarios/:id', usuario_1.deleteUsuarioCommand);
controller.register(framework_1.Method.POST, '/usuarios', usuario_1.novoUsuarioCommand);
controller.register(framework_1.Method.GET, '/produtos', produto_1.todosProdutosCommand);
controller.register(framework_1.Method.POST, '/produtos', produto_1.novoProdutoCommand);
var server = http_1.createServer(function (req, resp) { return controller.handle(req, resp); });
server.listen(9999, function () {
    console.log('Server running at http://localhost:9999');
});
//# sourceMappingURL=main.js.map