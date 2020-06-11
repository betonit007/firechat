import React, { useState, useEffect } from "react";

import { auth } from "./firebase/firebase.utils";
import { signInWithGoogle } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import Flames from "./pages/Flames";
import "./App.css";

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

  return (
    <>
      <div>
        Hello World
        <button onClick={signInWithGoogle}>SignIn</button>
        <button onClick={() => auth.signOut()}>SignOut</button>
      </div>
      <div>
        <Flames />
      </div>
    </>
  );
};

export default App;
