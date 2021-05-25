import React, { useContext, useEffect } from "react";
import Budget from "./Budget";
import budgetContext from "../../context/budgets/budgetContext";
const BudgetList = () => {
  const budgetsContext = useContext(budgetContext);
  const { budgets, getBudgetsFn } = budgetsContext;

  useEffect(() => {
    getBudgetsFn();
  }, []);

  if (budgets.length === 0) return <h2>Create your budgets</h2>;

  return (
    <ul className="listado-proyectos">
      {budgets.map((budget) => (
        <Budget key={budget.id} budget={budget} />
      ))}
    </ul>
  );
};

export default BudgetList;
