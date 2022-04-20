import { IncomingMessage, ServerResponse } from 'http';
import { URL } from 'url';
import { Pet } from '../Model/Pet';
import { Command } from './Command'


// GET /usuarios
class TodosPetsCommand implements Command {
  execute(req: IncomingMessage, resp: ServerResponse): void {
    const registros = Pet.all()
    resp.writeHead(200, { 'Content-Type': 'application/json' })
    resp.end(JSON.stringify(registros))
  }
}

export const todosPetsCommand = new TodosPetsCommand()

export const novoPetCommand = { // objeto literal
  execute(req: IncomingMessage, resp: ServerResponse): void {
    let corpo = ''
    req.on('data', (parte) => corpo += parte)
    req.on('end', () => {
      const {nome, especie} = JSON.parse(corpo)
      const pet = new Pet(nome, especie)
      if (pet.save()) {
        resp.writeHead(201, { 'Content-Type': 'text/plain' })
        resp.end('Pet Criado')
      } else {
        resp.writeHead(400, { 'Content-Type': 'application/json' })
        resp.end(JSON.stringify({ erros: pet.erros }))
      }
    })
  }
}

// tslint:disable-next-line: max-classes-per-file
export class GetPetCommand implements Command {
  execute(req: IncomingMessage, resp: ServerResponse): void {
    if (req.url?.indexOf("id=")) {
      try {
        const newURL = new URL(`http://localhost:9999/${req.url}`)
        const idNova = newURL.searchParams.get('id')
        // tslint:disable-next-line: radix
        if(typeof idNova === 'string') {
          // tslint:disable-next-line: radix
          const petId = parseInt(idNova)
          // tslint:disable-next-line: no-shadowed-variable
          const registro = Pet.findId(petId)
          resp.writeHead(200, { 'Content-Type': 'application/json' })
          resp.end(JSON.stringify(registro))
        }
      } catch (error) {
        resp.end(error)
      }
    }
  }
}

export const getPetCommand = new GetPetCommand()

// tslint:disable-next-line: max-classes-per-file
export class UpdatePetCommand implements Command {
  execute(req: IncomingMessage, resp: ServerResponse): void {
    try {
      if (req.url) {
        const newURL = new URL(`http://localhost:9999/${req.url}`)
        const idNova = newURL.searchParams.get('id')
        // tslint:disable-next-line: radix
        if (typeof idNova === 'string') {
          // tslint:disable-next-line: radix
          const petId = parseInt(idNova)
          // tslint:disable-next-line: no-shadowed-variable
          let corpo = ''
          req.on('data', (parte) => corpo += parte)
          req.on('end', () => {
            const { nome, especie } = JSON.parse(corpo)
            const pet = new Pet(nome, especie)
            if (pet.update(petId)) {
              resp.writeHead(201, { 'Content-Type': 'text/plain' })
              resp.end('Pet Alterado')
            } else {
              resp.writeHead(400, { 'Content-Type': 'application/json' })
              resp.end(JSON.stringify({ erros: pet.erros }))
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


export const updatePetCommand = new UpdatePetCommand()


// tslint:disable-next-line: max-classes-per-file
export class DeletePetCommand implements Command {
  execute(req: IncomingMessage, resp: ServerResponse): void {
    if (req.url?.indexOf("id=")) {
      try {
        const idURL = req.url
        const newURL = new URL(`http://localhost:9999/${req.url}`)
        const idNova = newURL.searchParams.get('id')
        // tslint:disable-next-line: radix
        if (typeof idNova === 'string') {
          // tslint:disable-next-line: radix
          const petId = parseInt(idNova)
          // tslint:disable-next-line: no-shadowed-variable
          const registro = Pet.remove(petId)
          resp.writeHead(200, { 'Content-Type': 'application/json' })
          resp.end(JSON.stringify(registro))
        }
      } catch (error) {
        resp.end(error)
      }
    }
  }
}

export const deletePetCommand = new DeletePetCommand()
