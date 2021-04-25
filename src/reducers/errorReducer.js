import { GET_ERRORS } from "../actions/types";

const initialState = {};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      console.log("ErrorReducer GET_ERRORS", action.type);
      return { ...state, errors: "jatin" };
    default:
      console.log("ErrorReducer default");
      return state;
  }
};

export default ErrorReducer;
