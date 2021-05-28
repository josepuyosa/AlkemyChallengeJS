import {
  EXPENSES_BUDGET,
  ADD_EXPENSE,
  VALIDATE_EXPENSE,
  DELETE_EXPENSE,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case EXPENSES_BUDGET:
      return {
        ...state,
        expensesBudget: state.expenses.filter(
          (expense) => expense.budgetId === action.payload
        ),
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        errorExpense: false,
      };
    case VALIDATE_EXPENSE:
      return {
        ...state,
        errorExpense: true,
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
