import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import budgetContext from "./budgetContext";
import budgetReducer from "./budgetReducer";
import {
  BUDGET_FORM,
  GET_BUDGETS,
  ADD_BUDGET,
  VALIDATE_FORM,
} from "../../types/index";

const BudgetState = (props) => {
  const budgets = [
    { id: 1, name: "Comida", amount: 1000 },
    { id: 2, name: "alquiler", amount: 300 },
    { id: 3, name: "servicios", amount: 562 },
    { id: 4, name: "otros", amount: 7852 },
  ];
  const initialState = {
    budgets: [],
    hideForm: false,
    errorForm: false,
  };

  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const showFormFn = () => {
    dispatch({
      type: BUDGET_FORM,
    });
  };
  const getBudgetsFn = () => {
    dispatch({
      type: GET_BUDGETS,
      payload: budgets,
    });
  };

  const addBugetFn = (budgets) => {
    budgets.id = uuid();
    dispatch({
      type: ADD_BUDGET,
      payload: budgets,
    });
  };

  const showErrorFn = () => {
    dispatch({
      type: VALIDATE_FORM,
    });
  };
  return (
    <budgetContext.Provider
      value={{
        budgets: state.budgets,
        hideForm: state.hideForm,
        errorForm: state.errorForm,
        showFormFn,
        getBudgetsFn,
        addBugetFn,
        showErrorFn,
      }}
    >
      {props.children}
    </budgetContext.Provider>
  );
};
export default BudgetState;
