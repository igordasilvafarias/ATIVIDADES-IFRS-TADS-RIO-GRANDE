import { IncomingMessage, ServerResponse } from 'http';
import { URL } from 'url';
import { Usuario } from '../Model/Usuario';
import { Command } from './Command'


// GET /usuarios
class TodosUsuariosCommand implements Command {
  execute(req: IncomingMessage, resp: ServerResponse): void {
    const registros = Usuario.all()
    resp.writeHead(200, { 'Content-Type': 'application/json' })
    resp.end(JSON.stringify(registros))
  }
}

export const todosUsuariosCommand = new TodosUsuariosCommand()

export const novoUsuarioCommand = { // objeto literal
  execute(req: IncomingMessage, resp: ServerResponse): void {
    let corpo = ''
    req.on('data', (parte) => corpo += parte)
    req.on('end', () => {
      const {nome, sobrenome} = JSON.parse(corpo)
      const usuario = new Usuario(nome, sobrenome)
      if (usuario.save()) {
        resp.writeHead(201, { 'Content-Type': 'text/plain' })
        resp.end('Usuario Criado')
      } else {
        resp.writeHead(400, { 'Content-Type': 'application/json' })
        resp.end(JSON.stringify({ erros: usuario.erros }))
      }
    })
  }
}

// tslint:disable-next-line: max-classes-per-file
export class GetUsuarioCommand implements Command {
  execute(req: IncomingMessage, resp: ServerResponse): void {
    if (req.url?.indexOf("id=")) {
      try {
        const idURL = req.url
        const newURL = new URL(`http://localhost:9999/${req.url}`)
        const idNova = newURL.searchParams.get('id')
        // tslint:disable-next-line: radix
        if(typeof idNova === 'string') {
          // tslint:disable-next-line: radix
          const userId = parseInt(idNova)
          // tslint:disable-next-line: no-shadowed-variable
          const registro = Usuario.findId(userId)
          resp.writeHead(200, { 'Content-Type': 'application/json' })
          resp.end(JSON.stringify(registro))
        }
      } catch (error) {
        resp.end(error)
      }
    }
    //if (req.url?.search('id')) {
     // try {
       // const idURL = req.url
       // const newURL = new URL(idURL)
       // console.log("to aqui! @@@@@@")
       // console.log(newURL.searchParams.get('id'))
    //  }


    //const idURL = req.url.slice(req.url.search('=') + 1, req.url.length)
   // const id = parseInt(idURL)
    //  console.log(newURL.searchParams.get('id'))
 //   } //fim do IF
    //const id = parseInt(urlId,10)
    //const registros = Usuario.findId(id)
   // resp.writeHead(200, { 'Content-Type': 'application/json' })
   // resp.end(JSON.stringify(registros))
  }
}

export const getUsuarioCommand = new GetUsuarioCommand()

// tslint:disable-next-line: max-classes-per-file
export class UpdateUsuarioCommand implements Command {
  execute(req: IncomingMessage, resp: ServerResponse): void {
    try {
      if (req.url) {
        const newURL = new URL(`http://localhost:9999/${req.url}`)
        const idNova = newURL.searchParams.get('id')
        // tslint:disable-next-line: radix
        if (typeof idNova === 'string') {
          // tslint:disable-next-line: radix
          const userId = parseInt(idNova)
          // tslint:disable-next-line: no-shadowed-variable
          let corpo = ''
          req.on('data', (parte) => corpo += parte)
          req.on('end', () => {
            const { nome, sobrenome } = JSON.parse(corpo)
            const usuario = new Usuario(nome, sobrenome)
            if (usuario.update(userId)) {
              resp.writeHead(201, { 'Content-Type': 'text/plain' })
              resp.end('Usuario Alterado')
            } else {
              resp.writeHead(400, { 'Content-Type': 'application/json' })
              resp.end(JSON.stringify({ erros: usuario.erros }))
            }
          })
        }
      } else {
        console.error("Falta id");
      }
    } catch (error) {
      resp.end(error)
    }
  }
}


export const updateUsuarioCommand = new UpdateUsuarioCommand()


// tslint:disable-next-line: max-classes-per-file
export class DeleteUsuarioCommand implements Command {
  execute(req: IncomingMessage, resp: ServerResponse): void {
    if (req.url?.indexOf("id=")) {
      try {
        const idURL = req.url
        const newURL = new URL(`http://localhost:9999/${req.url}`)
        const idNova = newURL.searchParams.get('id')
        // tslint:disable-next-line: radix
        if (typeof idNova === 'string') {
          // tslint:disable-next-line: radix
          const userId = parseInt(idNova)
          // tslint:disable-next-line: no-shadowed-variable
          const registro = Usuario.remove(userId)
          resp.writeHead(200, { 'Content-Type': 'application/json' })
          resp.end(JSON.stringify(registro))
        }
      } catch (error) {
        resp.end(error)
      }
    }
  }
}

export const deleteUsuarioCommand = new DeleteUsuarioCommand()
