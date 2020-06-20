import React from "react";
import { Link } from 'react-router-dom'

import { auth } from "../../firebase/firebase.utils";

import "./navbar.css";

const Navbar = ({ authState }) => {
  return (
    <div className="nav-body">
      <div id="nav-wrapper">
        Fire <Link to='/'><i className="fa fa-fire"></i>Chat</Link>
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
