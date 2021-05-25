import React from "react";
import Login from "./components/auth/Login";
import NewAcount from "./components/auth/NewAcount";
import Budgets from "./components/budgets/Budgets";
import BudgetState from "./context/budgets/BudgetState";
import ExpenseState from "./context/expenses/expenseState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BudgetState>
      <ExpenseState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/new-acount" component={NewAcount} />
            <Route exact path="/budgets" component={Budgets} />
          </Switch>
        </Router>
      </ExpenseState>
    </BudgetState>
  );
}

export default App;
