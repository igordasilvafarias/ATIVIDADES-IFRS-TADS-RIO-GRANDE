"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioDAO = void 0;
var DAO_1 = require("./DAO");
var UsuarioDAO = /** @class */ (function (_super) {
    __extends(UsuarioDAO, _super);
    function UsuarioDAO() {
        return _super.call(this, 'usuarios') || this;
    }
    UsuarioDAO.prototype.add = function (usuario) {
        var nome = usuario.nome, sobrenome = usuario.sobrenome;
        _super.prototype.add.call(this, { nome: nome, sobrenome: sobrenome });
    };
    UsuarioDAO.prototype.update = function (usuario, id) {
        var nome = usuario.nome, sobrenome = usuario.sobrenome;
        _super.prototype.updateById.call(this, { nome: nome, sobrenome: sobrenome }, id);
    };
    return UsuarioDAO;
}(DAO_1.DAO));
exports.UsuarioDAO = UsuarioDAO;
//# sourceMappingURL=UsuarioDAO.js.map