import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from './authentication';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => (!isAuthenticated() ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: location } }} />
    ))
    }
  />
);

export default PrivateRoute;
