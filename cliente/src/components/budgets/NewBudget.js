import React, { Fragment, useState } from "react";
const NewBudget = () => {
  const [budget, setBudget] = useState({
    BudgetName: "",
  });

  const { BudgetName } = budget;

  const onChangeBudget = (e) => {
    setBudget({
      ...budget,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitBudget = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        New Budget
      </button>
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
          type="submit"
          className="btn btn-primario btn-block"
          value="Create Budget"
        />
      </form>
    </Fragment>
  );
};

export default NewBudget;
