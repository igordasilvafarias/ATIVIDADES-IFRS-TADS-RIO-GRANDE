import connect, { Database } from 'better-sqlite3'

// Layer Supertype de Persistencia
// https://martinfowler.com/eaaCatalog/layerSupertype.html
export class DAO {
  private readonly _table: string
  private _db: Database

  constructor(table: string) {
    this._table = table
    this._db = connect('./banco.db')
  }

  findAll(): any[] {
    const SQL = `SELECT * FROM ${this._table}`
    return this._db.prepare(SQL).all()
  }

  add(obj: any) {
    const campos = Object.keys(obj)
    const SQL = `INSERT INTO ${this._table} (` +
      campos.join(', ') +
      `) VALUES (` +
      campos.map(campo => `@${campo}`).join(', ') +
      ')'
    console.log(SQL)
    this._db.prepare(SQL).run(obj)
  }

  findById(id: number): any {
    const SQL = `SELECT * FROM ${this._table} WHERE id = ${id}`
    return this._db.prepare(SQL).get()
  }

  deleteById(id: number): any {
    const SQL = `DELETE FROM ${this._table} WHERE id = ${id}`
    return this._db.prepare(SQL).run()
  }

  updateById(obj: any, id: number): any {
    const campos = Object.keys(obj)
    const SQL = `UPDATE ${this._table} SET ` +
                  campos.map((campo) => `${campo} = @${campo}`).join(", ") +
                   ` =? WHERE id = ${id}`

    console.log(SQL)
    //this._db.prepare(SQL).run(obj)
  }

}
