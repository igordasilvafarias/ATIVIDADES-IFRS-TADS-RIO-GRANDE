import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();
const userController = new UserController();

router.get('/signup', userController.showSignupPage);
router.post('/signup', userController.signupUser);
router.get('/login', userController.showLoginPage);
router.post('/login', userController.authLogin);

export default router;