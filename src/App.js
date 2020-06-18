import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Flames from "./pages/Flames/Flames";
import Landing from "./pages/Landing/Landing";
import PrivateRoute from "./routing/PrivateRoute";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";

import { createUserProfileDocument, auth } from "./firebase/firebase.utils";

const App = () => {
  const [authState, setAuthState] = useState();

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snap) => {
          setAuthState({
            currentUser: {
              id: snap.id,
              ...snap.data(),
            },
          });
        });
      }
      setAuthState(user); //this essentials sets current user to null if user signs out
      return () => unsubscribeFromAuth(); //The returned function will be called just before every rerendering of the component
    });
  }, []);
  console.log(authState);

  return (
    <Router>
      <div className="main">
        <Navbar authState={authState} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (authState ? <Redirect to="/flames" /> : <Landing />)}
          />
          <PrivateRoute
            exact
            path="/flames"
            component={Flames}
            authState={authState}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
