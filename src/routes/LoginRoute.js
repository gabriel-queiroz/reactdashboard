import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from './authentication';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={props => (!isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ))
      }
    />
  );
};

export default PrivateRoute;
