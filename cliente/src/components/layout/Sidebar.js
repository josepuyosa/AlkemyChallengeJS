import React from "react";
import NewBudget from "../budgets/NewBudget";
const Sidebar = () => {
  return (
    <aside>
      <h1>Budgets</h1>
      <NewBudget />

      <div className="proyectos">
        <h2>Your Budgets</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
