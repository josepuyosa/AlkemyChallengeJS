import React from "react";
import Expense from "./Expense";
const ExpenseList = () => {
  const expensesBudget = [
    { name: "carnes", amount: 0, state: true },
    { name: "secos", amount: 0, state: true },
    { name: "dulces", amount: 0, state: true },
    { name: "otros", amount: 0, state: true },
  ];
  return (
    <>
      <h2>Budget: Comida </h2>
      <ul className="listado-tareas">
        {expensesBudget.length === 0 ? (
          <li>
            <p>there isn't any expense</p>
          </li>
        ) : (
          expensesBudget.map((expense) => <Expense expense={expense} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Delete Budget &times;
      </button>
    </>
  );
};

export default ExpenseList;
