import { Router } from 'express';
import { itemController } from '../controllers/itemController';

const router = Router();

const ItemController = new itemController();

router.get('/lista', ItemController.listItems);
router.get('/adicionar/:id/:idVet', ItemController.itemForm);
router.post('/adicionar/:id/:idVet', ItemController.addItem);
router.get('/:id/:idVet', ItemController.detailItemById);
router.get('/deletar/:id/:idVet', ItemController.deleteByIdItem);

export default router;