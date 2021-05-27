import React, { useContext, useState } from "react";
import budgetContext from "../../context/budgets/budgetContext";
import expenseContext from "../../context/expenses/expenseContext";

const ExpenseForm = () => {
  const budgetsContext = useContext(budgetContext);
  const { budget } = budgetsContext;
  //
  const expensesContext = useContext(expenseContext);
  const { errorExpense, addExpenseFn, validateExpenseFn, getExpensesFn } =
    expensesContext;

  const [expense, setExpense] = useState({
    name: "",
    type: "",
    date: "",
    amount: 0,
  });

  const { name, type, date, amount } = expense;

  if (!budget) return null;

  const [currentBudgetFn] = budget;

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || type.trim() === "" || date.trim() === "") {
      validateExpenseFn();
      return;
    }
    expense.budgetId = currentBudgetFn.id;
    if (expense.type === "entry") {
      expense.state = true;
    } else if (expense.type === "egress") {
      expense.state = false;
    }
    addExpenseFn(expense);

    getExpensesFn(currentBudgetFn.id);
    setExpense({
      name: "",
      type: "",
      date: "",
      amount: 0,
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Expense Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="number"
            className="input-text"
            placeholder="Expense Amount"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <select
            value={type}
            name="type"
            className="input-text"
            onChange={handleChange}
          >
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
            value={date}
            onChange={handleChange}
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
      {errorExpense ? (
        <p className="mensaje error">All fields are required</p>
      ) : null}
    </div>
  );
};

export default ExpenseForm;
