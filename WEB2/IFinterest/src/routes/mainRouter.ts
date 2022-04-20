import { Router } from 'express';
import { isAuth } from '../middlewares/isAuth';
import { AuthController } from '../controllers/AuthController';
import { UserController } from '../controllers/UserController';

const router = Router();

const authController = new AuthController();
const userController = new UserController();

router.get('/', userController.showInitialPage); 

router.get('/signup', authController.showSignup);
router.post('/signup', authController.signup); 

router.get('/login', authController.showLogin);
router.post('/login', authController.login); 
 
router.get('/logout', authController.logout); 
 
router.get('/profile', isAuth, userController.showProfilePage); 

router.get('/image', isAuth, userController.showImagesPage);
router.get('/allUserImages', isAuth, userController.showAllUserImages); 
router.get('/addImage', isAuth, userController.showAddImagePage);  
router.post('/addImage', isAuth, userController.addImage);  
router.get('/image/delete/:id', isAuth, userController.deleteImage);
router.get('/image/linkGallery/:id', isAuth, userController.linkImageAndGalleryPage);
router.post('/image/linkGallery/:id', isAuth, userController.linkImageAndGallery);

router.get('/gallery', isAuth, userController.showGallerysPage);
router.get('/gallery/:id', isAuth, userController.showGallerysImages);
router.get('/addGallery', isAuth, userController.showAddGallerysPage);
router.post('/addGallery', isAuth, userController.addGallery);
router.get('/gallerys', isAuth, userController.showGallerys);
router.get('/gallery/delete/:id', isAuth, userController.deleteGallery);

export default router;