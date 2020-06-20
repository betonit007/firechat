import React from 'react';
import { useForm } from "react-hook-form";
import { auth } from '../../firebase/firebase.utils'

const SignInInputs = () => {
    
  const { register, handleSubmit, errors } = useForm(); //Intialize react-hook-form
 
  const onSubmit = async (data) => {
    
    try {
      await auth.signInWithEmailAndPassword(data.email, data.password)

    } catch (err) {
      console.log(err);
      
    }
  };

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />   
        {errors.email && "Please enter a valid email address."}
        <input type="password" placeholder="Password" name="password" ref={register({required: true, minLength: 6})} />        
        {errors.password && "Password must be at least six characters long."}
        <input className='fire-btn' type="submit" />
      </form>
    </div>
  )
}

export default SignInInputs
