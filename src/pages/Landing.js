import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom'
import { signInWithGoogle } from "../firebase/firebase.utils";

const Landing = () => {

  return (
      <div>
          <button onClick={()=> signInWithGoogle()}>Sign In</button>
      </div>
  )
};

export default Landing;
