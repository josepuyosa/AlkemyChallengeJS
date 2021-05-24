import React from "react";
import Budget from "./Budget";
const BudgetList = () => {
  const budgets = [
    { name: "Comida" },
    { name: "alquiler" },
    { name: "servicios" },
  ];

  return (
    <ul className="listado-proyectos">
      {budgets.map((budget) => (
        <Budget budget={budget} />
      ))}
    </ul>
  );
};

export default BudgetList;
