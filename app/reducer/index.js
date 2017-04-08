import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import alertsReducer from './alertsReducer';
import todosReducer from './todosReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  alerts: alertsReducer,
  todos: todosReducer
});
