import { createContext, useContext, useState } from "react";

import { getIngredientesRequest } from "../api/Ingredientes";

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

  const getIngredientes = async () => {
    const res = await getIngredientesRequest();
    console.log(res);
  };
  return (
    <SistemaContext.Provider value={{ getIngredientes }}>
      {children}
    </SistemaContext.Provider>
  );
};
