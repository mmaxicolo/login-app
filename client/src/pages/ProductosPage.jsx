import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Index";
import { useSistema } from "../context/SistemaContext";
import ProductosRows from "../components/rows/ProductosRows";
import { useNavigate } from "react-router-dom";
import VolverNavegacion from "../components/rows/VolverNavegacion.jsx";
import SearchBar from "../components/buscador/SearchBar.jsx";

function ProductosPage() {
  const { getProductos, productos } = useSistema();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProductos();
  }, []);


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducto = productos.filter((producto) =>
    producto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="top-container">
        <VolverNavegacion link="/" name="Home"/>
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      </div>
      <div className="table-box">
        <ProductosRows header={true} producto={null} />
        {filteredProducto.map((producto) => (
          <ProductosRows
            header={false}
            producto={producto}
            key={producto.id}
          />
        ))}
      <button className="btn" onClick={(ev) => navigate("/createProductos")}>
        Create Producto
      </button>
      </div>
    </>
  );
}

export default ProductosPage;
