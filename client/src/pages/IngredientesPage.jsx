import { useEffect } from "react";
import { useSistema } from "../context/SistemaContext";
import { useAuth } from "../context/AuthContext";
function IngredientesPage() {
  const { getIngredientes } = useSistema();
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading) {
    getIngredientes();
    }
  }, [loading]);
  return <div>IngredientesPage</div>;
}
export default IngredientesPage;
