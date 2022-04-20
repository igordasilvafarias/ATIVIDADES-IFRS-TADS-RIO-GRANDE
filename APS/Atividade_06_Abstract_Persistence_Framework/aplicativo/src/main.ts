import { createServer } from 'http'
import { parse } from 'url'
import { todosUsuariosCommand, novoUsuarioCommand} from './usuario'
import { todosProdutosCommand, novoProdutoCommand} from './produto'
import { FrontController, Method } from 'framework'

const controller = new FrontController()

controller.register(Method.GET, '/nada')
controller.register(Method.GET, '/usuarios', todosUsuariosCommand)
controller.register(Method.POST, '/usuarios', novoUsuarioCommand)
controller.register(Method.GET, '/produtos', todosProdutosCommand)
controller.register(Method.POST, '/produtos', novoProdutoCommand)

const server = createServer((req, resp) => controller.handle(req, resp))
server.listen(9999, () => {
  console.log('Server running at http://localhost:9999')
})

