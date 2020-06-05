//Object-based approach

import { EDIT_STREAM } from "./src/actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      //return {...state, [action.payload.id]: action.payload]}

      const newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};
