import React, { useContext } from "react";
import budgetContext from "../../context/budgets/budgetContext";
const ExpenseForm = () => {
  const budgetsContext = useContext(budgetContext);
  const { budget } = budgetsContext;

  if (!budget) return null;

  const [currentBudgetFn] = budget;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Expense Name"
          />
        </div>
        <div className="contenedor-input">
          <select name="type" className="input-text">
            <option value="">--Select one--</option>
            <option value="entry">Entry</option>
            <option value="egress">Egress</option>
          </select>
        </div>
        <div className="contenedor-input">
          <input
            type="date"
            className="input-text"
            placeholder="date"
            name="date"
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Add Expense"
          />
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
