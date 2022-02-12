import { combineReducers } from 'redux';
import auth from './auth/auth';
import sidebar from './sidebar/sidebar';

export default combineReducers({
  auth: auth,
  sidebar: sidebar
});
