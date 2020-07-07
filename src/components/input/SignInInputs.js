import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { auth } from '../../firebase/firebase.utils'

const SignInInputs = () => {
    
  const { register, handleSubmit, errors } = useForm(); //Intialize react-hook-form
  const [credError, setCredError] = useState(null)

  const onSubmit = async (data) => {
    
    try {
      await auth.signInWithEmailAndPassword(data.email, data.password)

    } catch (err) {
      setCredError(err)
      setTimeout(() => {
        setCredError(null)
      }, 3000)
    }
  };

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />   
        {errors.email && <span>Please enter a valid email address.</span>}
        <input type="password" placeholder="Password" name="password" ref={register({required: true, minLength: 6})} />        
        {errors.password && <span>Password must be at least six characters long.</span>}
        {credError && <span className="cred-error">Invalid user credentials</span> }
        <input className='fire-btn' type="submit" />
      </form>
    </div>
  )
}

export default SignInInputs
