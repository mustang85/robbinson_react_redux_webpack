import combineReducers from 'redux/lib/combineReducers';

import { createPurchases, calcTotalCost } from './redux/reducers'

export default combineReducers({
  purchases: createPurchases,
  totalCost: calcTotalCost
});
