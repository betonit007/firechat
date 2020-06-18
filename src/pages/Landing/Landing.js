import React from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import RegisterInputs from '../../components/registerInputs/RegisterInputs'
import "./landing.css";

const Landing = () => {
  
  return (
    <div className="landing-body">
      <h2>Register</h2>
      <RegisterInputs />
      <h2 className='or-landing'>or</h2>
      <button className="google-signin" onClick={() => signInWithGoogle()}>
       <i className='google-icon fa fa-google'></i> Sign In With Google
      </button>
    </div>
  );
};

export default Landing;
