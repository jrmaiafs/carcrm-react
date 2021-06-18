import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Routes = () => (
  <Router>
    <Suspense
      fallback={
        <div className="d-flex justify-content-center mt-5 pt-5">
          {<CircularProgress />}
        </div>
      }
    >
      <Switch>
        <Route path="/" component={() => <h1>Home</h1>} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;

