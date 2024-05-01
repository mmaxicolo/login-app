import { useSistema } from "../context/SistemaContext";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VolverNavegacion from "../components/rows/VolverNavegacion.jsx";
import Navbar from "../components/navbar/Index";
import SearchBar from "../components/buscador/SearchBar.jsx";

function IngredientesSelectPage() {
  const {
    getIngredientes,
    ingredientes,
    selectIngredientes,
    getIngredientesProducto,
  } = useSistema();
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getIngredientes();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getIngredientesProducto(params.id);
      setIngredientesSeleccionados(res.ingredientes);
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (id, isChecked) => {
    setIngredientesSeleccionados((prev) => {
      if (isChecked) {
        return [...prev, { id: id, amount: 0 }];
      } else {
        return prev.filter((item) => item.id !== id);
      }
    });
  };
  const handleAmountChange = (amount, id) => {
    setIngredientesSeleccionados((prev) => {
      const seleccionadoIndex = prev.findIndex((item) => item.id === id);
      const copy = [...prev];

      copy[seleccionadoIndex].amount = parseInt(amount);
      return copy;
    });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    try {
      selectIngredientes(params.id, ingredientesSeleccionados);
      navigate(`/getIngredientes/${params.id}`);
    } catch (error) {}
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

   const filteredIngrediente = ingredientes.filter((ingrediente) =>
    ingrediente.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <VolverNavegacion link={`/getIngredientes/${params.id}`} name={"Ingredientes"}/>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} /> 
      <div className="container_form">
        <form className="form" onSubmit={handleSubmit}>
          {filteredIngrediente.map((i) => {
            const ingredienteSeleccionado = ingredientesSeleccionados.find(
              (item) => item.id === i._id
            );

            return (
              <div className="container-input" key={i._id}>
                <input
                  className="checkbox"
                  type="checkbox"
                  name={i.name}
                  id={i._id}
                  onChange={(e) =>
                    handleCheckboxChange(i._id, e.target.checked)
                  }
                  checked={!!ingredienteSeleccionado}
                />
                <label htmlFor={i._id}>{i.name}</label>
                {ingredienteSeleccionado && (
                  <input
                    className="input-checkbox"
                    type="text"
                    placeholder={`cantidad para ${i.name}`}
                    value={ingredienteSeleccionado.amount || 0}
                    onChange={(e) => handleAmountChange(e.target.value, i._id)}
                  />
                )}
              </div>
            );
          })}
          <button type="submit" className="btn">
            Agregar
          </button>
        </form>
      </div>
    </>
  );
}

export default IngredientesSelectPage;
