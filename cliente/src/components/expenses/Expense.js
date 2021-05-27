import React from "react";
const Expense = ({ expense }) => {
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
        <button type="button" className="btn btn-secundario">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Expense;
