import * as types from './actionTypes.js';

export function changePage(page) {
  return { type: types.CHANGE_PAGE, page };
}
