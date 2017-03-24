
/**
 * dependencies
 */

import combineReducers from 'redux/lib/combineReducers';

import * as reducers from './reducers';
import * as _actions from './actions';


/**
 * feature
 */

export const actions = _actions;
export const reducer = combineReducers(reducers);
