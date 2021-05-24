import React, { useReducer } from "react";
import budgetContext from "./budgetContext";
import budgetReducer from "./budgetReducer";

const BudgetState = (props) => {
  const initialState = {
    form: false,
  };

  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <budgetContext.Provider
      value={{
        form: state.form,
      }}
    >
      {props.children}
    </budgetContext.Provider>
  );
};
export default BudgetState;
