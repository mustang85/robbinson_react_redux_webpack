import React, { Component, PropTypes } from 'react';

import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import DevTools from '../DevTools'

import getRoutes from '../../routes'

export default class Root extends Component {
  renderApp() {
    const { history, store } = this.props;

    const router = (
      <Router history={history}>
        {getRoutes(store)}
      </Router>
    );

    if (__DEVELOPMENT__ && __DEVTOOLS__ && !window.devToolsExtension) {
      return (
        <div>
          {router}
          <DevTools key="devtools" />
        </div>
      );
    }

    return router;
  }

  render() {

    return (
      <Provider store={this.props.store}>
        {this.renderApp()}
      </Provider>
    );
  }
}

