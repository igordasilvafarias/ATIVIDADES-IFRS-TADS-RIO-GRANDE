"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = exports.FrontController = void 0;
var url_1 = require("url");
// NOP = no operation
var NULL_COMMAND = {
    execute: function (req, resp) {
        resp.writeHead(204);
        resp.end();
    }
};
var FrontController = /** @class */ (function () {
    function FrontController() {
        this.routing = {};
    }
    // registrar os comandos
    FrontController.prototype.register = function (method, path, command) {
        if (command === void 0) { command = NULL_COMMAND; }
        if (!this.routing[path])
            this.routing[path] = {};
        this.routing[path][method] = command;
    };
    FrontController.prototype.handle = function (req, resp) {
        var _a;
        var url = url_1.parse((_a = req.url) !== null && _a !== void 0 ? _a : '', true);
        // pathname = '/usuarios'
        if (url.pathname && this.routing[url.pathname]) {
            if (req.method && this.routing[url.pathname][req.method]) {
                var command = this.routing[url.pathname][req.method];
                try {
                    command.execute(req, resp);
                }
                catch (e) {
                    resp.writeHead(500);
                    resp.end("Server Error: " + e);
                }
            }
            else {
                resp.writeHead(405);
                resp.end(req.method + " Not Allowed");
            }
        }
        else {
            resp.writeHead(404);
            resp.end(url.pathname + " Not Found");
        }
    };
    return FrontController;
}());
exports.FrontController = FrontController;
var Method;
(function (Method) {
    Method["GET"] = "GET";
    Method["POST"] = "POST";
    Method["PUT"] = "PUT";
    Method["DELETE"] = "DELETE";
})(Method = exports.Method || (exports.Method = {}));
//# sourceMappingURL=FrontController.js.map