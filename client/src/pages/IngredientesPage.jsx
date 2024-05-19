// IngredientesPage.jsx
import React, { useEffect, useState } from "react";
import { useSistema } from "../context/SistemaContext";
import Navbar from "../components/navbar/Index";
import IngredientesRows from "../components/rows/IngredientesRows.jsx";
import { useNavigate } from "react-router-dom";
import VolverNavegacion from "../components/rows/VolverNavegacion.jsx";
import SearchBar from "../components/buscador/SearchBar.jsx";

function IngredientesPage() {
  const { getIngredientes, ingredientes } = useSistema();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getIngredientes();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredIngredientes = ingredientes.filter((ingrediente) =>
    ingrediente.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  filteredIngredientes.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <Navbar />
      <div className="top-container">
        <VolverNavegacion link="/" name="Home" />
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      </div>

      <div className="table-box">
        <IngredientesRows header={true} ingrediente={null} />

        {filteredIngredientes.map((ingrediente) => (
          <IngredientesRows
            header={false}
            ingrediente={ingrediente}
            key={ingrediente._id}
          />
        ))}

        <button className="btn" onClick={(ev) => navigate("/createIngrediente")}>
          Crear Ingrediente
        </button>
      </div>
    </>
  );
}

export default IngredientesPage;
