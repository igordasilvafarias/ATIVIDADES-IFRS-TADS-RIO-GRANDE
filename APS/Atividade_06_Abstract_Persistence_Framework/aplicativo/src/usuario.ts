import { IncomingMessage, ServerResponse } from 'http';
import { Command } from "framework"
import { Database } from 'sqlite3'
import { insertUser, selectAll } from './dataBaseCommands';

const db = new Database('./banco.db')

// GET /usuarios
export const todosUsuariosCommand = {
  execute(req: IncomingMessage, resp: ServerResponse): void {
    selectAll(resp, 'usuarios')
  }
}

export const novoUsuarioCommand = { // objeto literal
  execute(req: IncomingMessage, resp: ServerResponse): void {
    insertUser(req, resp)
  }
}







