import { combineReducers } from 'redux';
import users from './users';
import auth from './authReducer';

export default combineReducers({
  users,
  auth,
});
