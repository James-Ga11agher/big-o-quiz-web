import { combineReducers } from 'redux';
import answerList from './answerListReducer.js';
import currentPage from './currentPageReducer.js';

const rootReducer = combineReducers({
  answerList,
  currentPage
});

export default rootReducer;
