import {
  BUDGET_FORM,
  GET_BUDGETS,
  ADD_BUDGET,
  VALIDATE_FORM,
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
      };
    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true,
      };
    default:
      return state;
  }
};
