import React, { useState, useEffect} from "react";
import { signInWithGoogle, createUserProfileDocument, auth } from "../../firebase/firebase.utils";

import "./navbar.css";

const Navbar = ({ setAuthState, authState }) => {

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
    <div className="nav-body">
      Hello World
      <button onClick={signInWithGoogle}>SignIn</button>
      <button onClick={() => auth.signOut()}>SignOut</button>
    </div>
  );
};

export default Navbar;
