import { combineReducers } from 'redux';
import user from './user/reducer';
import product from './product/reducer';
import orders from './order/reducer';

export default combineReducers({
  user,
  product,
  orders,
});
