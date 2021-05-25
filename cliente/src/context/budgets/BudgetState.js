import React, { useReducer } from "react";
import budgetContext from "./budgetContext";
import budgetReducer from "./budgetReducer";
import { BUDGET_FORM } from "../../types/index";

const BudgetState = (props) => {
  const initialState = {
    hideForm: false,
  };

  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const showFormFn = () => {
    dispatch({
      type: BUDGET_FORM,
    });
  };

  return (
    <budgetContext.Provider
      value={{
        hideForm: state.hideForm,
        showFormFn,
      }}
    >
      {props.children}
    </budgetContext.Provider>
  );
};
export default BudgetState;
