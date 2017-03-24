
import React from 'react';
import { Route } from 'react-router';

import Layout from './views/App/components/Layout'
// import Budget from './views/App/views/Budget/containers/App';
import Purchases from './views/App/views/Head3/Example4/containers';
import Budget from './views/App/views/Head3/Example5/containers';
import WeeklyWage from './views/App/views/Head3/Example6/containers';


export default function getRoutes(store) {
  const { getState, dispatch } = store;

  return (
    <Route component={Layout} path='/'>
      {/*<Route path="budget" component={Budget} />*/}


      <Route path="head3">
        <Route path="example4" component={Purchases} />
        <Route path="example5" component={Budget} />
        <Route path="example6" component={WeeklyWage} />
      </Route>

    </Route>
  )
}
