import { IncomingMessage, ServerResponse } from 'http';
import { Command } from 'framework'
import { Database } from 'sqlite3'
import { insertProduct, selectAll } from './dataBaseCommands';

const db = new Database('./banco.db')

// GET /produtos
export const todosProdutosCommand = {
  execute(req: IncomingMessage, resp: ServerResponse): void {
    selectAll(resp, 'produtos')
  }
}

export const novoProdutoCommand = { // objeto literal
  execute(req: IncomingMessage, resp: ServerResponse): void {
    insertProduct(req, resp)
  }
}
