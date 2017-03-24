
import combineReducers from 'redux/lib/combineReducers';
import { routerReducer } from 'react-router-redux/lib/reducer';

import app from './views/App/reducer';

/**
 * reducer
 */

export default combineReducers({
  routing: routerReducer,
  app
});
