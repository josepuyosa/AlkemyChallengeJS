import { BUDGET_FORM } from "../../types/index";
export default (state, action) => {
  switch (action.type) {
    case BUDGET_FORM:
      return {
        ...state,
        hideForm: true,
      };
    default:
      return state;
  }
};
