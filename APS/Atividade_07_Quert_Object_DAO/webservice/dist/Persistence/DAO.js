"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAO = void 0;
var better_sqlite3_1 = __importDefault(require("better-sqlite3"));
// Layer Supertype de Persistencia
// https://martinfowler.com/eaaCatalog/layerSupertype.html
var DAO = /** @class */ (function () {
    function DAO(table) {
        this._table = table;
        this._db = better_sqlite3_1.default('./banco.db');
    }
    DAO.prototype.findAll = function () {
        var SQL = "SELECT * FROM " + this._table;
        return this._db.prepare(SQL).all();
    };
    DAO.prototype.add = function (obj) {
        var campos = Object.keys(obj);
        var SQL = "INSERT INTO " + this._table + " (" +
            campos.join(', ') +
            ") VALUES (" +
            campos.map(function (campo) { return "@" + campo; }).join(', ') +
            ')';
        console.log(SQL);
        this._db.prepare(SQL).run(obj);
    };
    DAO.prototype.findById = function (id) {
        var SQL = "SELECT * FROM " + this._table + " WHERE id = " + id;
        return this._db.prepare(SQL).get();
    };
    DAO.prototype.deleteById = function (id) {
        var SQL = "DELETE FROM " + this._table + " WHERE id = " + id;
        return this._db.prepare(SQL).run();
    };
    DAO.prototype.updateById = function (obj, id) {
        var campos = Object.keys(obj);
        var SQL = "UPDATE " + this._table + " SET " +
            campos.map(function (campo) { return campo + " = @" + campo; }).join(", ") +
            (" =? WHERE id = " + id);
        console.log(SQL);
        //this._db.prepare(SQL).run(obj)
    };
    return DAO;
}());
exports.DAO = DAO;
//# sourceMappingURL=DAO.js.map