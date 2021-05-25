import {
  BUDGET_FORM,
  GET_BUDGETS,
  ADD_BUDGET,
  VALIDATE_FORM,
  CURRENT_BUDGET,
  DELETE_BUDGET,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case BUDGET_FORM:
      return {
        ...state,
        hideForm: true,
      };
    case GET_BUDGETS:
      return {
        ...state,
        budgets: action.payload,
      };
    case ADD_BUDGET:
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
        hideForm: false,
        errorForm: false,
      };
    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true,
      };
    case CURRENT_BUDGET:
      return {
        ...state,
        budget: state.budgets.filter((budget) => budget.id === action.payload),
      };
    case DELETE_BUDGET:
      return {
        ...state,
        budgets: state.budgets.filter((budget) => budget.id !== action.payload),
        budget: null,
      };
    default:
      return state;
  }
};
