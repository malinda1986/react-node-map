import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from 'pages/common/layout'

const RoutePage = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </Router>
  );
};

export default RoutePage;
