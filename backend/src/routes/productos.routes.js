import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { getProducto, createProducto,updateProducto,deleteProducto, selectIngredientes, getIngredientes, getAProducto } from "../controllers/productos.controllers.js";
import { bodyProductos,bodyProductosIngrdientes } from "../schemas/productos.schema.js";

const router = new Router();

router.get('/getProducto', authRequired, getProducto);
router.post('/createProducto', authRequired, validateSchema(bodyProductos), createProducto);
router.post('/updateProducto/:id',authRequired, validateSchema(bodyProductos), updateProducto);
router.post('/deleteProducto/:id', authRequired, deleteProducto);
router.post('/selectIngredientes/:id', authRequired,validateSchema(bodyProductosIngrdientes), selectIngredientes);
router.get('/getIngredientes/:id', authRequired, getIngredientes)
router.get('/getProducto/:id', authRequired, getAProducto)

export default router;