import React from "react";
import NewBudget from "../budgets/NewBudget";
import BudgetList from "../budgets/BudgetList";
const Sidebar = () => {
  return (
    <aside>
      <h1>Budgets</h1>
      <NewBudget />

      <div className="proyectos">
        <h2>Your Budgets</h2>
        <BudgetList />
      </div>
    </aside>
  );
};

export default Sidebar;
