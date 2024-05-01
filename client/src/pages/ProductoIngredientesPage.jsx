import { useEffect, useState } from "react";
import { useSistema } from "../context/SistemaContext";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Index";
import ProductoIngredientesRows from "../components/rows/ProductoIngredientesRows";
import VolverNavegacion from "../components/rows/VolverNavegacion.jsx";

function ProductoIngredientesPage() {
  const [ingredientes, setIngredientes] = useState([]);
  const [producto, setProducto] = useState("");
  const { getIngredientesProducto, getAIngrediente } = useSistema();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getIngredientesProducto(params.id);
      setIngredientes(res.ingredientes);
      setProducto(res.name);
    };
    fetchData();
  }, []);

  const getDatos = async (id) => {
    const res = await getAIngrediente(id);
    return res[0];
  };

  return (
    <>
      <Navbar />
      <VolverNavegacion link={"/productos"} name={"Productos"}/>
      <div className="table-box">
        <h1 className="producto-title">{producto}</h1>
        <ProductoIngredientesRows
          header={true}
          amount={null}
          ingrediente={null}
        />
        {ingredientes.map((ingrediente) => {
          const res = getDatos(ingrediente.id);
          return (
            <ProductoIngredientesRows
              header={false}
              datos={ingrediente}
              ingrediente={res}
              key={ingrediente._id}
            />
          );
        })}
      <button
          className="btn"
          onClick={(ev) => navigate(`/selectIngredientes/${params.id}`)}
        >
          Seleccionar Ingredientes
        </button>
      </div>
    </>
  );
}

export default ProductoIngredientesPage;
