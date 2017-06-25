import { combineReducers } from 'redux';
import answerList from './answerListReducer.js';

const rootReducer = combineReducers({
  answerList
});

export default rootReducer;
