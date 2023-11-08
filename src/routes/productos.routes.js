import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { getProducto, createProducto,updateProducto,deleteProducto } from "../controllers/productos.controllers.js";

const router = new Router();

router.get('/getProducto', authRequired, getProducto);
router.post('/createProducto', authRequired, createProducto);
router.post('/updateProducto/:id',authRequired, updateProducto);
router.post('/deleteProducto/:id', authRequired, deleteProducto);

export default router;