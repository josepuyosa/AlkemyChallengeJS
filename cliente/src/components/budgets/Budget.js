import React from "react";
const Budget = ({ budget }) => {
  return (
    <li>
      <button type="button" className="btn btn-blank">
        {budget.name}
        {budget.BudgetName}
      </button>
      <label>${budget.amount}</label>
    </li>
  );
};

export default Budget;
