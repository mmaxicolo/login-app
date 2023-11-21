import {ingredientesInstance} from "./axios.js";

export const getIngredientesRequest = () => ingredientesInstance.get(`/getIngrediente`);