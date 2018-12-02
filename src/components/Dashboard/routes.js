import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";


const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default routes;
