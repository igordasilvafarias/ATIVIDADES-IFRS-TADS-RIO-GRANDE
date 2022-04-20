"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
var Model = /** @class */ (function () {
    function Model() {
        this._erros = [];
    }
    Model.prototype.validate = function () {
        this._erros = [];
        this._validate(this._erros);
    };
    Object.defineProperty(Model.prototype, "isValid", {
        get: function () {
            this.validate();
            return this._erros.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "erros", {
        get: function () {
            return this._erros;
        },
        enumerable: false,
        configurable: true
    });
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=Model.js.map