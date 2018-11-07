import { combineReducers } from 'redux';
import makesReducer from './makesReducer';
import modelsReducer from './modelsReducer';

export default combineReducers({
  makes: makesReducer,
  models: modelsReducer
});