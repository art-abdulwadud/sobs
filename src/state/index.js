import { combineReducers } from 'redux';
import auth from './auth/auth';
import checkout from './checkout/checkout';
import sidebar from './sidebar/sidebar';

export default combineReducers({
  auth: auth,
  sidebar: sidebar,
  checkout: checkout
});
