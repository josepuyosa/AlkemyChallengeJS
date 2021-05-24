import React from "react";
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import ExpenseForm from "../expenses/ExpenseFrom";
import ExpenseList from "../expenses/ExpenseList";
const Budgets = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Bar />
        <main>
          <ExpenseForm />
          <div className="contenedor-tareas">
            <ExpenseList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Budgets;
