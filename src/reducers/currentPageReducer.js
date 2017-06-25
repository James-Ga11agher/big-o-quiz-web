import * as types from '../actions/actionTypes.js';

export default function(state = 'QUESTION_PAGE', action) {
  switch (action.type) {
    case types.CHANGE_PAGE:
      return state = action.page;

    default:
      return state;
  }
}
