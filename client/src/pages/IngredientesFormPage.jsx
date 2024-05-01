import React, { useEffect, useState } from "react";
import { useSistema } from "../context/SistemaContext";
import { useNavigate, useParams } from "react-router-dom";
import VolverNavegacion from "../components/rows/VolverNavegacion.jsx";
import Navbar from "../components/navbar/Index";

function IngredientesFormPage() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [unit, setUnit] = useState("");
  const [amount, setAmount] = useState("");

  const {
    createIngrediente,
    updateIngrediente,
    getAIngrediente,
    errors,
  } = useSistema();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const fetchData = async () => {
        try {
          if (params.id) {
            const res = (await getAIngrediente(params.id))[0];
            setName(res.name);
            setCost(res.cost);
            setUnit(res.unit);
            setAmount(res.amount);
          }
        } catch (error) {
          console.error("Error al obtener el ingrediente:", error);
        }
      };
      fetchData();
    }
  }, []);

  const handleFocus = (ev) => {
    ev.target.placeholder = "";
  };
  const handleBlur = (ev, originalPlaceholder) => {
    ev.target.placeholder = originalPlaceholder;
  };
  const handleErrors = (err) => {
    if (err.length > 0) {
      return (
        <div className="error__container">
          {errors.map((err, i) => (
            <div className="error__text" key={i}>
              {err}
            </div>
          ))}
        </div>
      );
    }
  };
  return (
    <>
    <Navbar/>
    <VolverNavegacion link={"/ingredientes"} name={"Ingredientes"}/>
      <div className="container_form">
        {handleErrors(errors)}
        <form
          className="form"
          onSubmit={(ev) => {
            ev.preventDefault();
            const ingrediente = {
              name,
              cost: parseInt(cost),
              unit,
              amount: parseInt(amount),
            };
            try {
              if (name !== "" && cost !== "" && unit !== "" && amount !== "") {
                if (params.id) {
                  updateIngrediente(ingrediente, params.id);
                } else {
                  createIngrediente(ingrediente);
                }
              } 
            } catch (error) {
              console.error("Error submitting form:", error);
            }
          }}
        >
          <h1>Create Ingrediente</h1>
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
              name="cost"
              placeholder="Cost"
              value={cost}
              onChange={(ev) => setCost(ev.target.value)}
            />
          </div>
          <div className="input__container">
            <input
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={(ev) => handleBlur(ev, "User")}
              type="text"
              className="inputs"
              name="unit"
              placeholder="Unit"
              value={unit}
              onChange={(ev) => setUnit(ev.target.value)}
            />
          </div>
          <div className="input__container">
            <input
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={(ev) => handleBlur(ev, "User")}
              type="text"
              className="inputs"
              name="amount"
              placeholder="Amount"
              value={amount}
              onChange={(ev) => setAmount(ev.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            {params.id ? "Editar" : "Crear"}
          </button>
        </form>
      </div>
    </>
  );
}

export default IngredientesFormPage;
