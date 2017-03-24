
import _createStore from 'redux/lib/createStore';
import applyMiddleware from 'redux/lib/applyMiddleware';

/**
 * dependencies
 */

 import DevTools from 'components/DevTools'

import thunkMiddleware from 'redux-thunk';

import reducer from 'reducer';

/**
 * store
 */

export default function createStore(initialState) {
  const middlewares = [thunkMiddleware];

  // logger middleware
  if (__DEVELOPMENT__) {
    const createLogger = require('redux-logger');
    middlewares.push(createLogger({ collapsed: true }));
  }

  // create store method
  let finalCreateStore;
  if (__DEVELOPMENT__ && __DEVTOOLS__) {
    const { persistState } = require('redux-devtools');
    const compose = require('redux/lib/compose').default;
    finalCreateStore = compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middlewares)(_createStore);
  }

  const store = finalCreateStore(reducer, initialState);

  // reducer hot module replacement
  if (__DEVELOPMENT__) {
    if (module.hot) {
      module.hot.accept('reducer', () => store.replaceReducer(require('reducer').default));
    }
  }

  return store;
}
