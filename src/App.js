import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import { appStore } from "./reducer/AppStore";
import logo from "./logo.svg";
import "./App.css";

import User from "./views/Users";
import Posts from "./views/Posts";
const Home = lazy(() => import("./views/Home.js"));

function App() {
  return (
    <Provider store={appStore}>
      <Suspense fallback={<div />}>
        <Router>
          <div>
            <header className="App-header">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/user">User</Link>
                  </li>
                  <li>
                    <Link to="/post">Post</Link>
                  </li>
                </ul>
              </nav>
              <img src={logo} className="App-logo" alt="logo" />
            </header>

            <Switch>
              <Route path="/user" exact render={() => <User />} />
              <Route path="/post" exact render={() => <Posts />} />
              <Route path="/" render={() => <Home />} />
            </Switch>
          </div>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
