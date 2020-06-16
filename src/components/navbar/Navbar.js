import React, { useEffect } from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./navbar.css";

const Navbar = ({ authState }) => {
  return (
    <div className="nav-body">
      <div id="nav-wrapper">
        Fire <i className="fa fa-fire"></i>Chat
        {authState && (
          <button id="signout" onClick={() => auth.signOut()}>
            Signout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
