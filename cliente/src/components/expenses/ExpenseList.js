import React, { useContext } from "react";
import Expense from "./Expense";
import budgetContext from "../../context/budgets/budgetContext";
const ExpenseList = () => {
  const budgetsContext = useContext(budgetContext);
  const { budget, deleteBudgetFn } = budgetsContext;

  if (!budget) return <h2>Choose a budget</h2>;
  const [currentBudgetFn] = budget;
  const expensesBudget = [
    { name: "carnes", amount: 0, state: true },
    { name: "secos", amount: 0, state: true },
    { name: "dulces", amount: 0, state: true },
    { name: "otros", amount: 0, state: true },
  ];
  const onclickDelete = () => {
    deleteBudgetFn(currentBudgetFn.id);
  };
  return (
    <>
      <h2>Budget: {currentBudgetFn.name} </h2>
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
