import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ConnectedAuth from '../views/Authenticate';
import ConnectedDash from '../views/Dashboard';
import SiteLayout from '../hoc/Layout';


// <Route
// exact
// path="/"
// component={ConnectedAuth}
// />
const Routes = () => (
  <Switch>
    <Route>
      <SiteLayout>
        <Switch>
          <Route
          exact
          path="/home"
          component={ConnectedDash}
          />
        </Switch>
      </SiteLayout>
    </Route>
  </Switch>
);

export default Routes;
