import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/*
import Dashboard from "../components/Dashboard";
import Login from "../pages/Login";
*/

const Dashboard = lazy(() => import("../components/Dashboard"));
const Login = lazy(() => import("../pages/Login"));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>Carregando</h1>}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
