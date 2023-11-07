import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getIngredientes, createIngrediente } from "../controllers/ingredientes.controllers.js";

const router = Router();

router.get('/getIngrediente', authRequired , getIngredientes);
router.post('/createIngrediente', authRequired, createIngrediente);
router.post('/updateIngrediente/:id', );
router.post('/deleteIngrediente', );

export default router;