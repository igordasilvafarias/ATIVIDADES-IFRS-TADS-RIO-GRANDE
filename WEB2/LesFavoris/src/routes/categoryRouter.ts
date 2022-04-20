import { Router } from 'express';
import { categoryController } from '../controllers/categoryController';

const router = Router();

const CategoryController = new categoryController();

router.get('/lista', CategoryController.listCategory);
router.get('/lista/:id', CategoryController.sortCategory);
router.get('/adicionar', CategoryController.categoryForm);
router.post('/adicionar', CategoryController.addCategory);
router.get('/deletar/:id', CategoryController.deleteByCategory);
router.get('/:id', CategoryController.detailCategory);

export default router;