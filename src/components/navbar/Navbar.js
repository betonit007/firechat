import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import "./navbar.css";

const Navbar = ({ authState }) => {
  console.log(authState && authState.currentUser && authState.currentUser.displayName)
  return (
    <div className="nav-body">
      <div id="nav-wrapper">
        Fire{" "}
        <Link to="/">
          <i className="fa fa-fire"></i>Chat
        </Link>
        {authState &&
        <div className="user-name">
          <p className='welcome'>Welcome</p><p>{authState && authState.currentUser && authState.currentUser.displayName.split(' ')[0]}</p>
          <i className='fa fa-sign-out' onClick={() => auth.signOut()}></i>
        </div> 
        }
      </div>
    </div>
  );
};

export default Navbar;
