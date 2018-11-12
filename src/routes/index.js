import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ConnectedLogin from '../views/Login';


const Routes = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={ConnectedLogin}
    />
  </Switch>
);

export default Routes;
