import React, { useReducer } from "react";
import ExpenseContext from "./expenseContext";
import ExpenseReducer from "./expenseReducer";

const ExpenseState = (props) => {
  const initialState = {
    expenses: [],
  };

  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{}}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseState;
