import {
  EXPENSES_BUDGET,
  ADD_EXPENSE,
  VALIDATE_EXPENSE,
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
    default:
      return state;
  }
};
