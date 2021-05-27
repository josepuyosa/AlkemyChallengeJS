import React, { useReducer } from "react";
import ExpenseContext from "./expenseContext";
import ExpenseReducer from "./expenseReducer";

import {
  EXPENSES_BUDGET,
  ADD_EXPENSE,
  VALIDATE_EXPENSE,
} from "../../types/index";

const ExpenseState = (props) => {
  const initialState = {
    expenses: [
      { name: "carnes", amount: 0, state: true, budgetId: 1 },
      { name: "secos", amount: 0, state: false, budgetId: 2 },
      { name: "dulces", amount: 0, state: true, budgetId: 3 },
      { name: "otros", amount: 0, state: false, budgetId: 4 },
    ],
    expensesBudget: null,
    errorExpense: false,
  };

  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  const getExpensesFn = (budgetId) => {
    dispatch({
      type: EXPENSES_BUDGET,
      payload: budgetId,
    });
  };

  const addExpenseFn = (expense) => {
    dispatch({
      type: ADD_EXPENSE,
      payload: expense,
    });
  };

  const validateExpenseFn = () => {
    dispatch({
      type: VALIDATE_EXPENSE,
    });
  };
  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        expensesBudget: state.expensesBudget,
        errorExpense: state.errorExpense,
        getExpensesFn,
        addExpenseFn,
        validateExpenseFn,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseState;
