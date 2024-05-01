import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getIngredientes, createIngrediente,updateIngrediente, deleteIngrediente, getAIngrediente} from "../controllers/ingredientes.controllers.js";
import { bodyIngredientes } from "../schemas/ingredientes.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.get('/getIngrediente', authRequired, getIngredientes);
router.post('/createIngrediente', authRequired, validateSchema(bodyIngredientes), createIngrediente);
router.post('/updateIngrediente/:id',authRequired, validateSchema(bodyIngredientes), updateIngrediente);
router.post('/deleteIngrediente/:id', authRequired, deleteIngrediente);
router.get('/getAIngrediente/:id', authRequired, getAIngrediente)

export default router;