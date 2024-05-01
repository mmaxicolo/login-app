import { useNavigate } from "react-router-dom";
import { useSistema } from "../../context/SistemaContext";

function ProductosRows({ header, producto }) {
  const navigate = useNavigate();
  const { deleteProducto } = useSistema();
  return header ? (
    <div className="table-row producto table-header">
      <div className="table-cell">Name</div>
      <div className="table-cell">Margen</div>
      <div className="table-cell">Packaging</div>
      <div className="table-cell">aggregate</div>
      <div className="table-cell">Amount Recipe</div>
      <div className="table-cell">Cost</div>
      <div className="table-cell">Actions</div>
    </div>
  ) : (
    <div className="table-row producto" key={producto._id}>
      <div className="table-cell">{producto.name}</div>
      <div className="table-cell">{producto.margen}</div>
      <div className="table-cell">{producto.packaging}</div>
      <div className="table-cell">{producto.aggregate}</div>
      <div className="table-cell">{producto.amountRecipe}</div>
      <div className="table-cell">{redondearDecimales(producto.cost, 2)}</div>
      <div className="table-cell cell-action">
        <button
          className="btn-action"
          onClick={(ev) => navigate(`/getIngredientes/${producto.id}`)}
        >
          Ingredientes
        </button>
        <button
          className="btn-action"
          onClick={(ev) => navigate(`/updateproducto/${producto.id}`)}
        >
          {" "}
          Edit{" "}
        </button>
        <button
          className="btn-action"
          onClick={(ev) => deleteProducto(producto.id)}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    </div>
  );
}
function redondearDecimales(numero, decimales) {
  let numeroRegexp = new RegExp("\\d\\.(\\d){" + decimales + ",}"); // Expresion regular para numeros con un cierto numero de decimales o mas
  if (numeroRegexp.test(numero)) {
    // Ya que el numero tiene el numero de decimales requeridos o mas, se realiza el redondeo
    return Number(numero.toFixed(decimales));
  } else {
    return Number(numero.toFixed(decimales)) === 0 ? 0 : numero; // En valores muy bajos, se comprueba si el numero es 0 (con el redondeo deseado), si no lo es se devuelve el numero otra vez.
  }
}
export default ProductosRows;
