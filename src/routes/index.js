import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ConnectedAuth from '../views/Authenticate';
import ConnectedDash from '../views/Dashboard';
import SiteLayout from '../hoc/Layout';



const Routes = () => (
  <Switch>
    <Route
    exact
    path="/"
    component={ConnectedAuth}
    />
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
