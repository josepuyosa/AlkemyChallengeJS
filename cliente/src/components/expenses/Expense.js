import React, { useContext } from "react";
import budgetContext from "../../context/budgets/budgetContext";
import expenseContext from "../../context/expenses/expenseContext";

const Expense = ({ expense }) => {
  const budgetsContext = useContext(budgetContext);
  const { budget } = budgetsContext;

  const [currentBudgetFn] = budget;
  //
  const expensesContext = useContext(expenseContext);
  const { deleteExpenseFn, getExpensesFn } = expensesContext;

  const onClickDelete = (id) => {
    deleteExpenseFn(id);
    getExpensesFn(currentBudgetFn.id);
  };

  return (
    <li className="tarea sombra">
      <p>{expense.name}</p>
      <p>${expense.amount}</p>
      <p>{expense.date}</p>
      <div className="estado">
        {expense.state ? (
          <button type="button" className="completo">
            Entry
          </button>
        ) : (
          <button type="button" className="incompleto">
            Egress
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => onClickDelete(expense.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Expense;
