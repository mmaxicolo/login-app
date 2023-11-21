import {ingredientesInstance} from "./axios.js";

export const getIngredientesRequest = () => ingredientesInstance.get(`/getIngrediente`);
export const createIngredientesRequest = (ingrediente) => ingredientesInstance.post(`/createIngrediente`,ingrediente)