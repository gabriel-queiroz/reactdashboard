import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Dashboard from "../components/Dashboard";

const routes = ({ history }) => (
  <BrowserRouter history={history}>
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default routes;
