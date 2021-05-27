import React, { useContext } from "react";
import Expense from "./Expense";
import budgetContext from "../../context/budgets/budgetContext";
import expenseContext from "../../context/expenses/expenseContext";

const ExpenseList = () => {
  const budgetsContext = useContext(budgetContext);
  const { budget, deleteBudgetFn } = budgetsContext;

  //expense context
  const expensesContext = useContext(expenseContext);

  const { expensesBudget } = expensesContext;
  if (!budget) return <h2>Choose a budget</h2>;

  const [currentBudgetFn] = budget;
  const onclickDelete = () => {
    deleteBudgetFn(currentBudgetFn.id);
  };
  return (
    <>
      <h2>Budget: {currentBudgetFn.name} </h2>
      <h2>Amount: {currentBudgetFn.amount} </h2>
      <ul className="listado-tareas">
        {expensesBudget.length === 0 ? (
          <li>
            <p>there isn't any expense</p>
          </li>
        ) : (
          expensesBudget.map((expense) => <Expense expense={expense} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onclickDelete}
      >
        Delete Budget &times;
      </button>
    </>
  );
};

export default ExpenseList;
