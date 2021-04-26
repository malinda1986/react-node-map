import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../../page-route";
import Loader from 'pages/common/loader'
import "./layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Suspense fallback={<Loader/>}>
        <Switch>
          {routes.map((route: any, idx: number) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                render={(props) => <route.component {...props} />}
              />
            ) : null;
          })}
          <Redirect from="/" to="/home" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Layout;
