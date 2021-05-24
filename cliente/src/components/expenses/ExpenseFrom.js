import React from "react";
const ExpenseForm = () => {
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Expense Name"
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
    </div>
  );
};

export default ExpenseForm;
