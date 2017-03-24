
import combineReducers from 'redux/lib/combineReducers';

/**
 * dependencies
 */

import * as _actions from './actions';
import * as _reducers from './reducers';

/**
 * feature
 */

export const actions = _actions;
export const reducer = combineReducers(_reducers)
