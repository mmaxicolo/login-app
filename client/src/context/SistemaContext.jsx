import { createContext, useContext, useEffect, useState } from "react";
import { Ingrediente, Producto } from "../class/clases.js";

import {
  createIngredientesRequest,
  getIngredientesRequest,
  updateIngredientesRequest,
  deleteIngredientesRequest,
  getAIngredienteRequest,
} from "../api/Ingredientes";
import {
  createProductoRequest,
  deleteProductoRequest,
  getIngredientesProductoRequest,
  getProductosRequest,
  selectIngredientesRequest,
  updateProductoRequest,
  getProductoRequest,
} from "../api/productos";

export const SistemaContext = createContext();
export const useSistema = () => {
  const context = useContext(SistemaContext);

  if (!context) {
    throw new Error("SistemaContext must be used within a SistemaProvider");
  }
  return context;
};

export const SistemaProvider = ({ children }) => {
  const [ingredientes, setIngredientes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);
  const getIngredientes = async () => {
    try {
      const res = await getIngredientesRequest();
      setIngredientes(res.data.ingredientes);
    } catch (error) {
      console.error("Error fetching ingredientes:", error);
      setErrors(error.response.data);
    }
  };
  const createIngrediente = async (ingrediente) => {
    try {
      await createIngredientesRequest(ingrediente);
    } catch (error) {
      console.error("Error creating ingrediente:", error);
      setErrors(error.response.data);
    }
  };
  const updateIngrediente = async (ingrediente, id) => {
    try {
      const res = await updateIngredientesRequest(ingrediente, id);
    } catch (error) {
      console.error("Error updating ingrediente:", error);
      setErrors(error.response.data);
    }
  };
  const deleteIngredientes = async (id) => {
    try {
      const res = await deleteIngredientesRequest(id);
      if (res.status === 200)
        setIngredientes(
          ingredientes.filter((ingrediente) => ingrediente._id !== id)
        );
    } catch (error) {
      console.error("Error deleting ingrediente:", error);
      setErrors(error.response.data);
    }
  };
  const getAIngrediente = async (id) => {
    try {
      const res = await getAIngredienteRequest(id);
      return res.data.ingrediente;
    } catch (error) {
      console.log(error);
    }
  };

  const getProductos = async () => {
    try {
      const res = await getProductosRequest();

      const productosConInformacion = await Promise.all(
        res.data.Productos.map(async (producto) => {
          const ingredientesConInfo = await Promise.all(
            producto.ingredientes.map(async (ingrediente) => {
              const info = await getAIngrediente(ingrediente.id);
              console.log(info);
              //conseguimos la informacion de cada ingrediente por producto
              const ingr = new Ingrediente(
                ingrediente.id,
                info[0].name,
                info[0].cost,
                info[0].unit,
                info[0].amount
              );
              // Devolvemos el nuevo objeto de ingrediente con la información adicional
              return {
                amount: ingrediente.amount,
                ingrediente: ingr,
              };
            })
          );
          const prod = new Producto(
            producto._id,
            producto.name,
            producto.margen,
            producto.packaging,
            producto.aggregate,
            producto.amountRecipe,
            ingredientesConInfo
          );
          return prod;
        })
      );

      setProductos(productosConInformacion);
      console.log(productosConInformacion);
    } catch (error) {
      console.log(error);
    }
  };
  const createProducto = async (producto) => {
    try {
      const res = await createProductoRequest(producto);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const updateProducto = async (id, producto) => {
    try {
      const res = await updateProductoRequest(id, producto);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getProducto = async (id) => {
    try {
      const res = await getProductoRequest(id);
      return res.data[0];
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProducto = async (id) => {
    try {
      const res = await deleteProductoRequest(id);
      if (res.status === 200) {
        setProductos(
          productos.filter((producto) => producto.id !== id)
          );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getIngredientesProducto = async (id) => {
    try {
      const res = await getIngredientesProductoRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const selectIngredientes = async (id, ingredientes) => {
    try {
      const res = await selectIngredientesRequest(id, ingredientes);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SistemaContext.Provider
      value={{
        productos,
        ingredientes,
        errors,
        getIngredientes,
        createIngrediente,
        updateIngrediente,
        deleteIngredientes,
        getAIngrediente,
        getProductos,
        createProducto,
        updateProducto,
        getProducto,
        deleteProducto,
        getIngredientesProducto,
        selectIngredientes,
      }}
    >
      {children}
    </SistemaContext.Provider>
  );
};
