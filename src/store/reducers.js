import { combineReducers } from 'redux';
import user from './user/reducer';
import product from './product/reducer';
import orders from './order/reducer';
import theme from './theme/reducer';

export default combineReducers({
  user,
  product,
  orders,
  theme,
});
