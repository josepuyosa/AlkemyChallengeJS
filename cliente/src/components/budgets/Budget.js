import React, { useContext } from "react";
import budgetContext from "../../context/budgets/budgetContext";
import expenseContext from "../../context/expenses/expenseContext";
const Budget = ({ budget }) => {
  //budget context
  const budgetsContext = useContext(budgetContext);
  const { currentBudgetFn } = budgetsContext;
  //expense context
  const expensesContext = useContext(expenseContext);

  const { getExpensesFn } = expensesContext;

  const selectBudget = (id) => {
    currentBudgetFn(id);
    getExpensesFn(id);
  };
  //getExpensesFn
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectBudget(budget.id)}
      >
        {budget.name}
        {budget.BudgetName}
      </button>
      <label>${budget.amount}</label>
    </li>
  );
};

export default Budget;
