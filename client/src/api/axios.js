import axios  from "axios";

export const apiInstance = axios.create({
    baseURL: "https://backend-abm-productos.onrender.com/api",
    withCredentials: true,
})
export const ingredientesInstance = axios.create({
    baseURL: "https://backend-abm-productos.onrender.com/ingredientes",
    withCredentials: true,
});

export const productosInstance = axios.create({
    baseURL: "https://backend-abm-productos.onrender.com/productos",
    withCredentials: true,
});

