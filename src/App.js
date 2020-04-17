import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import { appStore } from "./reducer/AppStore";
import logo from "./logo.svg";
import "./App.css";

import User from "./views/Users";
import Posts from "./views/Posts";
import NavbarComponent from "./views/NavbarComponent";
import UserPosts from "./views/UserPosts";
import AddPost from "./views/AddPost";
const Home = lazy(() => import("./views/Home.js"));

function App() {
  return (
    <Provider store={appStore}>
      <Suspense fallback={<div />}>
        <Router>
          <div className="App">
            <NavbarComponent/>
            <Switch>
              <Route path="/userposts" exact render={()=> <UserPosts/>}/>
              <Route path="/addpost" exact render={()=> <AddPost/>}/>
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
