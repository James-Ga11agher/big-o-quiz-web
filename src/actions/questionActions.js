import * as types from './actionTypes.js';

export function submitAnswer(answer) {
  return { type: types.SUBMIT_ANSWER, answer };
}
