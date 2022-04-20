"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarioCommand = exports.DeleteUsuarioCommand = exports.updateUsuarioCommand = exports.UpdateUsuarioCommand = exports.getUsuarioCommand = exports.GetUsuarioCommand = exports.novoUsuarioCommand = exports.todosUsuariosCommand = void 0;
var url_1 = require("url");
var Usuario_1 = require("../Model/Usuario");
// GET /usuarios
var TodosUsuariosCommand = /** @class */ (function () {
    function TodosUsuariosCommand() {
    }
    TodosUsuariosCommand.prototype.execute = function (req, resp) {
        var registros = Usuario_1.Usuario.all();
        resp.writeHead(200, { 'Content-Type': 'application/json' });
        resp.end(JSON.stringify(registros));
    };
    return TodosUsuariosCommand;
}());
exports.todosUsuariosCommand = new TodosUsuariosCommand();
exports.novoUsuarioCommand = {
    execute: function (req, resp) {
        var corpo = '';
        req.on('data', function (parte) { return corpo += parte; });
        req.on('end', function () {
            var _a = JSON.parse(corpo), nome = _a.nome, sobrenome = _a.sobrenome;
            var usuario = new Usuario_1.Usuario(nome, sobrenome);
            if (usuario.save()) {
                resp.writeHead(201, { 'Content-Type': 'text/plain' });
                resp.end('Usuario Criado');
            }
            else {
                resp.writeHead(400, { 'Content-Type': 'application/json' });
                resp.end(JSON.stringify({ erros: usuario.erros }));
            }
        });
    }
};
// tslint:disable-next-line: max-classes-per-file
var GetUsuarioCommand = /** @class */ (function () {
    function GetUsuarioCommand() {
    }
    GetUsuarioCommand.prototype.execute = function (req, resp) {
        var _a;
        if ((_a = req.url) === null || _a === void 0 ? void 0 : _a.indexOf("id=")) {
            try {
                var idURL = req.url;
                var newURL = new url_1.URL("http://localhost:9999/" + req.url);
                var idNova = newURL.searchParams.get('id');
                // tslint:disable-next-line: radix
                if (typeof idNova === 'string') {
                    // tslint:disable-next-line: radix
                    var userId = parseInt(idNova);
                    // tslint:disable-next-line: no-shadowed-variable
                    var registro = Usuario_1.Usuario.findId(userId);
                    resp.writeHead(200, { 'Content-Type': 'application/json' });
                    resp.end(JSON.stringify(registro));
                }
            }
            catch (error) {
                resp.end(error);
            }
        }
        //if (req.url?.search('id')) {
        // try {
        // const idURL = req.url
        // const newURL = new URL(idURL)
        // console.log("to aqui! @@@@@@")
        // console.log(newURL.searchParams.get('id'))
        //  }
        //const idURL = req.url.slice(req.url.search('=') + 1, req.url.length)
        // const id = parseInt(idURL)
        //  console.log(newURL.searchParams.get('id'))
        //   } //fim do IF
        //const id = parseInt(urlId,10)
        //const registros = Usuario.findId(id)
        // resp.writeHead(200, { 'Content-Type': 'application/json' })
        // resp.end(JSON.stringify(registros))
    };
    return GetUsuarioCommand;
}());
exports.GetUsuarioCommand = GetUsuarioCommand;
exports.getUsuarioCommand = new GetUsuarioCommand();
// tslint:disable-next-line: max-classes-per-file
var UpdateUsuarioCommand = /** @class */ (function () {
    function UpdateUsuarioCommand() {
    }
    UpdateUsuarioCommand.prototype.execute = function (req, resp) {
        try {
            if (req.url) {
                var newURL = new url_1.URL("http://localhost:9999/" + req.url);
                var idNova = newURL.searchParams.get('id');
                // tslint:disable-next-line: radix
                if (typeof idNova === 'string') {
                    // tslint:disable-next-line: radix
                    var userId_1 = parseInt(idNova);
                    // tslint:disable-next-line: no-shadowed-variable
                    var corpo_1 = '';
                    req.on('data', function (parte) { return corpo_1 += parte; });
                    req.on('end', function () {
                        var _a = JSON.parse(corpo_1), nome = _a.nome, responsavel = _a.responsavel;
                        var usuario = new Usuario_1.Usuario(nome, responsavel);
                        if (usuario.update(userId_1)) {
                            resp.writeHead(201, { 'Content-Type': 'text/plain' });
                            resp.end('Usuario Alterado');
                        }
                        else {
                            resp.writeHead(400, { 'Content-Type': 'application/json' });
                            resp.end(JSON.stringify({ erros: usuario.erros }));
                        }
                    });
                }
            }
            else {
                console.error("Falta id");
            }
        }
        catch (error) {
            resp.end(error);
        }
    };
    return UpdateUsuarioCommand;
}());
exports.UpdateUsuarioCommand = UpdateUsuarioCommand;
exports.updateUsuarioCommand = new UpdateUsuarioCommand();
// tslint:disable-next-line: max-classes-per-file
var DeleteUsuarioCommand = /** @class */ (function () {
    function DeleteUsuarioCommand() {
    }
    DeleteUsuarioCommand.prototype.execute = function (req, resp) {
        var _a;
        if ((_a = req.url) === null || _a === void 0 ? void 0 : _a.indexOf("id=")) {
            try {
                var idURL = req.url;
                var newURL = new url_1.URL("http://localhost:9999/" + req.url);
                var idNova = newURL.searchParams.get('id');
                // tslint:disable-next-line: radix
                if (typeof idNova === 'string') {
                    // tslint:disable-next-line: radix
                    var userId = parseInt(idNova);
                    // tslint:disable-next-line: no-shadowed-variable
                    var registro = Usuario_1.Usuario.remove(userId);
                    resp.writeHead(200, { 'Content-Type': 'application/json' });
                    resp.end(JSON.stringify(registro));
                }
            }
            catch (error) {
                resp.end(error);
            }
        }
    };
    return DeleteUsuarioCommand;
}());
exports.DeleteUsuarioCommand = DeleteUsuarioCommand;
exports.deleteUsuarioCommand = new DeleteUsuarioCommand();
//# sourceMappingURL=UsuarioCommands.js.map