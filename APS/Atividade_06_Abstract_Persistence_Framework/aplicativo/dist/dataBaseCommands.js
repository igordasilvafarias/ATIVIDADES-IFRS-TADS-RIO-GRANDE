"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectAll = void 0;
var sqlite3_1 = require("sqlite3");
var db = new sqlite3_1.Database('./banco.db');
function selectAll(resp, table) {
    db.all("SELECT * FROM " + table, function (erro, registros) {
        resp.writeHead(200, { 'Content-Type': 'application/json' });
        resp.end(JSON.stringify(registros));
    });
}
exports.selectAll = selectAll;
//# sourceMappingURL=dataBaseCommands.js.map