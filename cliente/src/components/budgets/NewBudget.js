import React, { Fragment, useState, useContext } from "react";
import budgetContext from "../../context/budgets/budgetContext";

const NewBudget = () => {
  const budgetsContext = useContext(budgetContext);
  const { hideForm, showFormFn } = budgetsContext;

  const [budget, setBudget] = useState({
    BudgetName: "",
    amount: "",
    date: "",
    type: "",
  });

  const { BudgetName, amount, type, date } = budget;

  const onChangeBudget = (e) => {
    setBudget({
      ...budget,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitBudget = (e) => {
    e.preventDefault();
  };

  const onclickForm = () => {
    showFormFn();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onclickForm}
      >
        New Budget
      </button>
      {hideForm ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitBudget}>
          <input
            type="text"
            className="input-text"
            placeholder="Budget Name"
            name="BudgetName"
            value={BudgetName}
            onChange={onChangeBudget}
          />
          <input
            type="text"
            className="input-text"
            placeholder="amount"
            name="amount"
            value={amount}
            onChange={onChangeBudget}
          />
          <select name="type" value={type} className="input-text">
            <option value="">--Select one--</option>
            <option value="entry">Entry</option>
            <option value="egress">Egress</option>
          </select>
          <input
            type="date"
            className="input-text"
            placeholder="date"
            name="date"
            value={date}
            onChange={onChangeBudget}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Create Budget"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewBudget;
