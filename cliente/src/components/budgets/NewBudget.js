import React, { Fragment, useState, useContext } from "react";
import budgetContext from "../../context/budgets/budgetContext";

const NewBudget = () => {
  const budgetsContext = useContext(budgetContext);
  const { hideForm, errorForm, showFormFn, addBugetFn, showErrorFn } =
    budgetsContext;

  const [budget, setBudget] = useState({
    name: "",
    amount: "",
  });

  const { name, amount } = budget;

  const onChangeBudget = (e) => {
    setBudget({
      ...budget,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitBudget = (e) => {
    e.preventDefault();

    if (name === "" || amount === "") {
      showErrorFn();
      return;
    }
    addBugetFn(budget);

    setBudget({
      name: "",
      amount: "",
    });
  };

  const onclick = () => {
    showFormFn();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onclick}
      >
        New Budget
      </button>
      {hideForm ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitBudget}>
          <input
            type="text"
            className="input-text"
            placeholder="Budget Name"
            name="name"
            value={name}
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

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Create Budget"
          />
        </form>
      ) : null}

      {errorForm ? (
        <p className="mensaje error">All fields are required</p>
      ) : null}
    </Fragment>
  );
};

export default NewBudget;
