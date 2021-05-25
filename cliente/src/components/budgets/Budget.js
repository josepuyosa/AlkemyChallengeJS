import React, { useContext } from "react";
import budgetContext from "../../context/budgets/budgetContext";
const Budget = ({ budget }) => {
  const budgetsContext = useContext(budgetContext);
  const { currentBudgetFn } = budgetsContext;
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => currentBudgetFn(budget.id)}
      >
        {budget.name}
        {budget.BudgetName}
      </button>
      <label>${budget.amount}</label>
    </li>
  );
};

export default Budget;
