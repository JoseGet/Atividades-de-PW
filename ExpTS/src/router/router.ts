import { Router } from 'express';
import { LoremIpsum } from "lorem-ipsum";
import mainController from '../controllers/main';
import produtoController from '../controllers/produto';
import majorController from "../controllers/major";

const router = Router();

//Major Controller
router.get('/major', majorController.index)
router.get('/major/read/:id', majorController.read)
router.get('/major/create', majorController.create)
router.post('/major/create', majorController.create)
router.get('/major/update/:id', majorController.update)
router.post('/major/update/:id', majorController.update)
router.get('/major/remove/:id', majorController.remove)

router.get('/', mainController.index)
router.get('/hb1', mainController.hb1);
router.get('/hb2', mainController.hb2);
router.get('/hb3', mainController.hb3);
router.get('/hb4', mainController.hb4);
router.get('/lorem/:num', mainController.lorem);
router.get('/sobre', mainController.sobre);

router.get('/create-cookie', mainController.createCookie);

export default router;