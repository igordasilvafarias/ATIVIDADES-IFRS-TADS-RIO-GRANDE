"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var FrontController_1 = require("./Presentation/FrontController");
var UsuarioCommands_1 = require("./Presentation/UsuarioCommands");
var controller = new FrontController_1.FrontController();
controller.register(FrontController_1.Method.GET, '/nada');
controller.register(FrontController_1.Method.GET, '/usuarios', UsuarioCommands_1.todosUsuariosCommand);
controller.register(FrontController_1.Method.GET, '/usuario', UsuarioCommands_1.getUsuarioCommand);
controller.register(FrontController_1.Method.POST, '/usuarios', UsuarioCommands_1.novoUsuarioCommand);
controller.register(FrontController_1.Method.DELETE, '/usuario', UsuarioCommands_1.deleteUsuarioCommand);
controller.register(FrontController_1.Method.PUT, '/usuario', UsuarioCommands_1.updateUsuarioCommand);
var server = http_1.createServer(function (req, resp) { return controller.handle(req, resp); });
server.listen(9999, function () {
    console.log('Server running at http://localhost:9999');
});
//# sourceMappingURL=main.js.map