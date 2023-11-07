import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getIngredientes, createIngrediente } from "../controllers/ingredientes.controllers.js";

const router = Router();

router.get('/getIngredientes', authRequired , getIngredientes);
router.post('/createIngrediente', authRequired, createIngrediente);
router.post('/updateIngrediente', );
router.post('/deleteIngrediente', );

export default router;