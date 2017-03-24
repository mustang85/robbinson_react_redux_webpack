import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import getRoutes from '../../routes'

export default class Root extends Component {
  render() {
    const { history, store } = this.props;

    return (
      <Provider store={store}>
        <Router history={history}>
          {getRoutes(store)}
        </Router>
      </Provider>
    );
  }
}


