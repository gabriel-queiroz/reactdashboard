import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loader from '../components/Loader';

const Dashboard = lazy(() => import('../components/Dashboard'));
const Login = lazy(() => import('../pages/Login'));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
