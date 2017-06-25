import * as types from '../actions/actionTypes.js';

export default function(state = [], action) {
  switch (action.type) {
    case types.SUBMIT_ANSWER:
      return [...state, action.answer];

    default:
      return state;
  }
}
