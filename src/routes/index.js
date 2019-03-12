import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ConnectedAuth from '../views/Authenticate';


const Routes = () => (
  <Switch>
    <Route
      path="/"
      component={ConnectedAuth}
    />
  </Switch>
);

export default Routes;
