import { useSistema } from "../../context/SistemaContext.jsx";
import { useNavigate } from "react-router-dom";

function IngredientesRows({ header, ingrediente }) {
  const { deleteIngredientes } = useSistema();

  const navigate = useNavigate();
    return header ? (
      <div className="table-row table-header">
        <div className="table-cell">Name</div>
        <div className="table-cell">Cost</div>
        <div className="table-cell">unit</div>
        <div className="table-cell">Amount</div>
        <div className="table-cell">actions</div>
      </div>
    ) : (
      <div className="table-row " key={ingrediente._id}>
        <div className="table-cell">{ingrediente.name}</div>
        <div className="table-cell">{ingrediente.cost}</div>
        <div className="table-cell">{ingrediente.unit}</div>
        <div className="table-cell">{ingrediente.amount}</div>
        <div className="table-cell cell-action">
          <button
            className="btn-action"
            onClick={(ev) => navigate(`/updateIngrediente/${ingrediente._id}`)}
          >
            {" "}
            Edit{" "}
          </button>
          <button className="btn-action" onClick={ev => deleteIngredientes(ingrediente._id)}>
            {" "}
            Delete{" "}
          </button>
        </div>
      </div>
    );
  }
  
  export default IngredientesRows;
  
