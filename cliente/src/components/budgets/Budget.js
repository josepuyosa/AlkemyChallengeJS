import React from "react";
const Budget = ({ budget }) => {
  return (
    <li>
      <button type="button" className="btn btn-blank">
        {budget.name}
      </button>
    </li>
  );
};

export default Budget;
