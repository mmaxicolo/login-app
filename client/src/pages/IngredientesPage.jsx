import { useEffect } from "react";
import { useSistema } from "../context/SistemaContext";
import { useAuth } from "../context/AuthContext";
function IngredientesPage() {
  const { getIngredientes } = useSistema();
  const { loading } = useAuth();
  useEffect(() => {
    if (!loading) {
    getIngredientes();
    }
  }, [loading]);
  return (
    <button>
      <a href="/createIngrediente">Crear Ingrediente</a>
    </button>
  );
}
export default IngredientesPage;
