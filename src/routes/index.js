import React from "react";
import Dashboard from "../components/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
