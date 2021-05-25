import React from "react";
const Expense = ({ expense }) => {
  return (
    <li className="tarea sombra">
      <p>{expense.name}</p>
      <p>${expense.amount}</p>
      <div className="estado">
        {expense.state ? (
          <button type="button" className="completo">
            Complete
          </button>
        ) : (
          <button type="button" className="incompleto">
            incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
        <button type="button" className="btn btn-secundario">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Expense;
