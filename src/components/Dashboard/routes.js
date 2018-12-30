import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../../pages/Home"));
const Contact = lazy(() => import("../../pages/Contact"));

const routes = () => (
  <Suspense fallback={<h1>Carregando..</h1>}>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Contact} exact path="/contact" />
    </Switch>
  </Suspense>
);

export default routes;
