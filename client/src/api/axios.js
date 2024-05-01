import axios  from "axios";

export const apiInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
})
export const ingredientesInstance = axios.create({
    baseURL: "http://localhost:3000/ingredientes",
    withCredentials: true,
});

export const productosInstance = axios.create({
    baseURL: "http://localhost:3000/productos",
    withCredentials: true,
});

