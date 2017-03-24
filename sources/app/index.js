// import 'font-awesome-sass-loader';

import React from 'react';
import { render } from 'react-dom';
import createStore from './redux/createStore';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './components/Root';

import history from './utils/history';

import './styles';

function startApp() {
  const store = createStore();
  const syncedHistory = syncHistoryWithStore(history, store);
  const appProps = { history: syncedHistory, store };

  render(<Root {...appProps} />, document.getElementById('root'));

  if (module.hot) {
    module.hot.accept('./components/Root', () => {
      const Root = require('./components/Root').default;
      render(<Root />, document.getElementById('root'));
    });
  }

}

/**
 * polyfill intl for safari browser
 * and start application
 */

if (!window.Intl) {
  // require.ensure(['intl'], () => {
  //   window.Intl = require('intl');
  //   startApp();
  // }, 'IntlBundle');
  startApp();
} else {
  startApp();
}
