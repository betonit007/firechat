import React from "react";
import { useForm } from "react-hook-form";
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import "./input.css";

const RegisterInputs = () => {
  const { register, handleSubmit, errors } = useForm(); //Intialize react-hook-form

  const onSubmit = async (data) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(data.email, data.password)

      await createUserProfileDocument(user, { displayName: data.name })

  } catch (err) {
      console.log(err.message)
  }
}
  

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" placeholder='Name' ref={register} /> {/* register an input */}
        <input type="text" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />   
        {errors.email && "Please enter a valid email address."}
        <input type="password" placeholder="Password" name="password" ref={register({required: true, minLength: 6})} />        
        {errors.password && "Password must be at least six characters long."}
        <input className='fire-btn' type="submit" />
      </form>
    </div>
  );
};

export default RegisterInputs;
