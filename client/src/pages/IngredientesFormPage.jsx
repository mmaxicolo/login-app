import React, { useState } from "react";
import { useSistema } from "../context/SistemaContext";

function IngredientesFormPage() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [unit, setUnit] = useState("");
  const [amount, setAmount] = useState("");

    const {createIngrediente} = useSistema();

  const handleFocus = (ev) => {
    ev.target.placeholder = "";
  };
  const handleBlur = (ev, originalPlaceholder) => {
    ev.target.placeholder = originalPlaceholder;
  };
  return (
    <>
      <form className="form" onSubmit={ev => {
        ev.preventDefault();
        const ingrediente = {
            name,
            cost: parseInt(cost),
            unit,
            amount: parseInt(amount),
        }
        createIngrediente(ingrediente);
      }}>
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
          Registrarse
        </button>
      </form>
    </>
  );
}

export default IngredientesFormPage;
