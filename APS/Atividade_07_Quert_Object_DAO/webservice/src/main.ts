import { createServer } from 'http'
import { FrontController, Method } from './Presentation/FrontController'
import { todosUsuariosCommand, novoUsuarioCommand, getUsuarioCommand, deleteUsuarioCommand, updateUsuarioCommand} from './Presentation/UsuarioCommands'
import { todosPetsCommand, novoPetCommand, getPetCommand, deletePetCommand, updatePetCommand} from './Presentation/PetCommands'

const controller = new FrontController()

controller.register(Method.GET, '/nada')
controller.register(Method.GET, '/usuarios', todosUsuariosCommand)
controller.register(Method.GET, '/usuario', getUsuarioCommand)
controller.register(Method.POST, '/usuarios', novoUsuarioCommand)
controller.register(Method.DELETE, '/usuario', deleteUsuarioCommand)
controller.register(Method.PUT, '/usuario', updateUsuarioCommand)

controller.register(Method.GET, '/pets', todosPetsCommand)
controller.register(Method.GET, '/pet', getPetCommand)
controller.register(Method.POST, '/pets', novoPetCommand)
controller.register(Method.DELETE, '/pet', deletePetCommand)
controller.register(Method.PUT, '/pet', updatePetCommand)

const server = createServer((req, resp) => controller.handle(req, resp))
server.listen(9999, () => {
  console.log('Server running at http://localhost:9999')
})

