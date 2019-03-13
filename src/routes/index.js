import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loader from '../components/Loader';
import PrivateRoute from './PrivateRoute';
import LoginRoute from './LoginRoute';

const Dashboard = lazy(() => import('../components/Dashboard'));
const Login = lazy(() => import('../pages/Login'));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Switch>
        <LoginRoute exact path="/login" component={Login} />
        <Route exact path="/404" component={() => <div>deuu erro aqui</div>} />
        <PrivateRoute path="/" component={Dashboard} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
