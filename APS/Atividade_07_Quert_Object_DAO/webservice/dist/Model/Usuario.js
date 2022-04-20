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
exports.Usuario = void 0;
var UsuarioDAO_1 = require("../Persistence/UsuarioDAO");
var Model_1 = require("./Model");
var dao = new UsuarioDAO_1.UsuarioDAO();
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nome, sobrenome, id) {
        var _this = _super.call(this) || this;
        // VALIDAR ANTES
        // if (nome.length < 2) {
        //   throw new Error(`Nome deve ter pelo menos 2 caracteres (recebido: ${nome})`)
        // }
        _this.id = id;
        _this.nome = nome;
        _this.sobrenome = sobrenome;
        return _this;
    }
    Usuario.prototype._validate = function (erros) {
        if (this.nome.length < 2) {
            erros.push("Nome deve ter pelo menos 2 caracteres");
        }
    };
    // Active Record
    Usuario.prototype.save = function () {
        if (this.isValid) {
            dao.add(this);
            return true;
        }
        else {
            return false;
        }
    };
    // Active Record
    Usuario.all = function () {
        return dao.findAll();
    };
    Usuario.findId = function (id) {
        return dao.findById(id);
    };
    Usuario.remove = function (id) {
        return dao.deleteById(id);
    };
    Usuario.prototype.update = function (id) {
        if (this.isValid) {
            dao.updateById(this, id);
            return true;
        }
        else {
            return false;
        }
    };
    return Usuario;
}(Model_1.Model));
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map