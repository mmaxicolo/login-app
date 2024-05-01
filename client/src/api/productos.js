import { productosInstance } from "./axios";
export const getProductosRequest = () => productosInstance.get('/getProducto');
export const createProductoRequest = (producto) => productosInstance.post('/createProducto', producto);
export const updateProductoRequest = (id, producto) => productosInstance.post(`/updateProducto/${id}`, producto);
export const deleteProductoRequest = (id) => productosInstance.post(`/deleteProducto/${id}`);
export const getIngredientesProductoRequest = (id) => productosInstance.get(`/getIngredientes/${id}`);
export const selectIngredientesRequest = (id, ingredientes) => productosInstance.post(`/selectIngredientes/${id}`, ingredientes);
export const getProductoRequest = (id) => productosInstance.get(`/getProducto/${id}`);