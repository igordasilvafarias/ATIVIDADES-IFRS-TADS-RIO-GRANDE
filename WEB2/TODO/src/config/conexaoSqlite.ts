import sqlite from "sqlite3";

sqlite.verbose();

const db = new sqlite.Database('./todo.db', error => {
    if(error) {
        return console.log(error.message);
    }
    console.log("Conected to the SQLite Database TODO");
});

export default db;