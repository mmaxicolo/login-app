import {ingredientesInstance} from "./axios.js";

export const getIngredientesRequest = () => ingredientesInstance.get(`/getIngrediente`);
export const createIngredientesRequest = (ingrediente) => ingredientesInstance.post(`/createIngrediente`,ingrediente)
export const updateIngredientesRequest = (ingrediente, id) => ingredientesInstance.post(`/updateIngrediente/${id}`,ingrediente)
export const deleteIngredientesRequest = (id) => ingredientesInstance.post(`/deleteIngrediente/${id}`);
export const getAIngredienteRequest = id => ingredientesInstance.get(`/getAIngrediente/${id}`);