import { useEffect, useState } from "react";
import { useSistema } from "../context/SistemaContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import VolverNavegacion from "../components/rows/VolverNavegacion.jsx";
import Navbar from "../components/navbar/Index";

function ProductosFormPage() {
  const [name, setName] = useState("");
  const [margen, setMargen] = useState("");
  const [packaging, setPackaging] = useState("");
  const [aggregate, setAggregate] = useState("");
  const [amountRecipe, setAmountRecipe] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const { createProducto, updateProducto, getProducto } = useSistema();
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        const res = await getProducto(params.id);
        setName(res.name);
        setMargen(res.margen);
        setPackaging(res.packaging);
        setAggregate(res.aggregate);
        setAmountRecipe(res.amountRecipe);
        setIngredientes(res.ingredientes);
      }
    };
    fetchData();
  }, []);
  const handleFocus = (ev) => {
    ev.target.placeholder = "";
  };
  const handleBlur = (ev, originalPlaceholder) => {
    ev.target.placeholder = originalPlaceholder;
  };

  return (
    <>
      <Navbar />
      <VolverNavegacion link={"/productos"} name={"Productos"} />
      <form
        className="form"
        onSubmit={(ev) => {
          ev.preventDefault();
          const producto = {
            id: params.id,
            name,
            margen: Number(margen),
            packaging: Number(packaging),
            aggregate: Number(aggregate),
            amountRecipe: Number(amountRecipe),
            ingredientes,
          };
          try {
            if (params.id) {
              updateProducto(params.id, producto);
            } else {
              createProducto(producto);
            }
            navigate("/productos");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <h1>{params.id ? "Editar Producto" : "Crear Producto"}</h1>
        <div className="input__container">
          <input
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={(ev) => handleBlur(ev, "User")}
            type="text"
            className="inputs"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <div className="input__container">
          <input
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={(ev) => handleBlur(ev, "User")}
            type="text"
            className="inputs"
            name="margen"
            placeholder="Margen"
            value={margen}
            onChange={(ev) => setMargen(ev.target.value)}
          />
        </div>
        <div className="input__container">
          <input
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={(ev) => handleBlur(ev, "User")}
            type="text"
            className="inputs"
            name="packaging"
            placeholder="Packaging"
            value={packaging}
            onChange={(ev) => setPackaging(ev.target.value)}
          />
        </div>
        <div className="input__container">
          <input
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={(ev) => handleBlur(ev, "User")}
            type="text"
            className="inputs"
            name="aggregate"
            placeholder="Aggregate"
            value={aggregate}
            onChange={(ev) => setAggregate(ev.target.value)}
          />
        </div>
        <div className="input__container">
          <input
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={(ev) => handleBlur(ev, "User")}
            type="text"
            className="inputs"
            name="amountRecipe"
            placeholder="AmountRecipe"
            value={amountRecipe}
            onChange={(ev) => setAmountRecipe(ev.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          {params.id ? "Editar" : "Crear"}
        </button>
      </form>
    </>
  );
}

export default ProductosFormPage;
