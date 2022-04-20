import { checkRole, isAuth, checkUserItemsOrAdmin } from '../middlewares/isAuth';
import { ItemController } from "../controllers/ItemController";
import { Router } from "express";

const router = Router();
const itemController = new ItemController();

//router.get('/list', isAuth, itemController.listItems);
router.get('/list', isAuth, itemController.listItemsPage);
//router.get('/page', isAuth, itemController.listItemsPage);
router.get('/insert', isAuth, itemController.showInsertTodoPage);
router.post('/insert', isAuth, itemController.insertTodo);
router.get('/:id', isAuth, itemController.detailTodo);
router.get('/delete/:id', isAuth, itemController.deleteTodo);
router.get('/update/:id', isAuth, itemController.showUpdateTodoPage);
router.post('/update/:id', isAuth, itemController.updateTodo);
router.get('/updateSituation/:id', isAuth, itemController.updateTodoSituation);

export default router;