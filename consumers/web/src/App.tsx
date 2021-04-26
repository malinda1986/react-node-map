import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "pages/common/layout";
import GlobalContextProvider from "context/global-context-provider";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const App = () => {
  return (
    <GlobalContextProvider>
        <Router>
          <Switch>
            <Route path="/">
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <Layout />
              <ToastContainer />
            </Route>
          </Switch>
        </Router>
    </GlobalContextProvider>
  );
};

export default App;
