import { useEffect, useState } from "react";

function ProductoIngredientesRows({ datos, ingrediente, header }) {
  const [resolvedIngrediente, setResolvedIngrediente] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (ingrediente instanceof Promise) {
        try {
          const resolvedData = await ingrediente;
          setResolvedIngrediente(resolvedData);
        } catch (error) {
          console.error("Error fetching ingrediente:", error);
        }
      } else {
        setResolvedIngrediente(ingrediente);
      }
    };

    fetchData();
  }, [ingrediente]);

  return header ? (
    <div className="table-row table-header">
      <div className="table-cell ProductoIngrediente">Name</div>
      <div className="table-cell ProductoIngrediente">Cost</div>
      <div className="table-cell ProductoIngrediente">unit</div>
      <div className="table-cell ProductoIngrediente">Amount</div>
      <div className="table-cell ProductoIngrediente">Amount Recipe</div>
      <div className="table-cell ProductoIngrediente">Cost Ingredient</div>
    </div>
  ) : (
    resolvedIngrediente && (
      <div className="table-row" key={datos.id}>
        <div className="table-cell ProductoIngrediente">{resolvedIngrediente.name}</div>
        <div className="table-cell ProductoIngrediente">{resolvedIngrediente.cost}</div>
        <div className="table-cell ProductoIngrediente">{resolvedIngrediente.unit}</div>
        <div className="table-cell ProductoIngrediente">{resolvedIngrediente.amount}</div>
        <div className="table-cell ProductoIngrediente">{datos.amount}</div>
        <div className="table-cell ProductoIngrediente">{(datos.amount * resolvedIngrediente.cost) / resolvedIngrediente.amount}</div>
      </div>
    )
  );
}

export default ProductoIngredientesRows;

