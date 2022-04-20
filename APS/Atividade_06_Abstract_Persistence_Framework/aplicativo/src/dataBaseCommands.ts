import { IncomingMessage, ServerResponse } from 'http'
import { Database } from 'sqlite3'

const db = new Database('./banco.db')

export function selectAll(resp: ServerResponse, table: string) {
  db.all(`SELECT * FROM ${table}`, (erro, registros) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' })
    resp.end(JSON.stringify(registros))
  })
}

export function insertUser(req: IncomingMessage, resp: ServerResponse) {
  let corpo = ''
  req.on('data', (parte) => corpo += parte)
  req.on('end', () => {
    const usuario = JSON.parse(corpo)
    const sql = 'INSERT INTO usuarios (nome, sobrenome) VALUES (?, ?)'
    const statement = db.prepare(sql)
    statement.run(usuario.nome, usuario.sobrenome)
    statement.finalize(() => {
      resp.writeHead(201, { 'Content-Type': 'text/plain' })
      resp.end('Usuario Criado')
    })
  })
}

export function insertProduct(req: IncomingMessage, resp: ServerResponse) {
  let corpo = ''
  req.on('data', (parte) => corpo += parte)
  req.on('end', () => {
    const produto = JSON.parse(corpo)
    const sql = 'INSERT INTO produtos (nome, preco) VALUES (?, ?)'
    const statement = db.prepare(sql)
    statement.run(produto.nome, produto.preco)
    statement.finalize(() => {
      resp.writeHead(201, { 'Content-Type': 'text/plain' })
      resp.end('Produto Criado')
    })
  })
}
