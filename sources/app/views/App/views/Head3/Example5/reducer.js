import combineReducers from 'redux/lib/combineReducers';

// import { reducer as transactionReducer } from './redux';
import { addTransaction, calcBalance } from './redux/reducers';

export default combineReducers({
  transaction: addTransaction,
  balance: calcBalance
})
