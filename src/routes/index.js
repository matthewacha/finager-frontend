import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ConnectedLogin from '../views/Login';
import ConnectedDash from '../views/Dashboard';
import SiteLayout from '../hoc/Layout';
import Authenticate from '../hoc/protectedRoute';


const Routes = () => (
  <Switch>
    <Route
    exact
    path="/"
    component={ConnectedLogin}
    />
    <Route>
      <SiteLayout>
        <Switch>
          <Route
          exact
          path="/home"
          component={Authenticate(ConnectedDash)}
          />
        </Switch>
      </SiteLayout>
    </Route>
  </Switch>
);

export default Routes;
