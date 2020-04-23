import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import { appStore } from "./reducer/AppStore";
import logo from "./logo.svg";
import "./App.css";

import { signInWithGoogle, auth } from './firebase/firebase'

import User from "./views/Users";
import Posts from "./views/Posts";
import NavbarComponent from "./views/NavbarComponent";
import UserPosts from "./views/UserPosts";
import AddPost from "./views/AddPost";
const Home = lazy(() => import("./views/Home.js"));


function App() {
  const [idToken, setIdToken]= useState(null)
  function signIn() {
    signInWithGoogle()
  }

  function signOut() {
    auth.signOut()
  }

  useEffect(()=> {
    auth.onAuthStateChanged(async nextUser=> {
      console.log("currentUser changed to: ", nextUser)

      if(auth.currentUser){
        setIdToken(await auth.currentUser.getIdToken())
      } else {
        setIdToken(null)
      }
      console.log("idToken changed to: ", idToken)
    })
  }, [])
  
  return (
    <Provider store={appStore}>
      <Suspense fallback={<div />}>
        <Router>
          <div className="App">
            <NavbarComponent/>

            <p>{auth.currentUser ? auth.currentUser.displayName + " is signed in" : "Please sign in"}</p>

            <button onClick={signIn}>Sign in with Google</button>
            <button onClick={signOut}>Sign me out</button>

            <p>The ID token is:</p>
            <code>{auth.currentUser ? idToken : "Please sign in"}</code>


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
