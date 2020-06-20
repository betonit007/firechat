import React from "react";
import { Link } from 'react-router-dom'
import SiginInputs from '../../components/input/SignInInputs'
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./landing.css";

const Landing = () => {
  
  return (
    <div className="landing-body">
      <h2>Sign In</h2>
      <SiginInputs />
      <Link to='./register'>Don't have an account? Click here to register</Link>
      <h2 className='or-landing'>or</h2>
      <button className="google-signin" onClick={() => signInWithGoogle()}>
       <i className='google-icon fa fa-google'></i> Sign In With Google
      </button>
    </div>
  );
};

export default Landing;
