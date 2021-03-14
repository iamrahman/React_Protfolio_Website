import React from "react";
import { Switch, Router, Route } from "react-router-dom";

// Components
import Routes from "../utils/routes";
import Home from "../containers/Home";
// constants
import { ROUTE_NAME } from "../constants";

const ReactRoute = () => {
  return (
    <Router history={Routes.history}>
      <Switch>
        <Route path={ROUTE_NAME.HOME} component={Home} exact={true} />
      </Switch>
    </Router>
  );
};
export default ReactRoute;
