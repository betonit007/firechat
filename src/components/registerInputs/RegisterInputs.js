import React from "react";
import { useForm } from "react-hook-form";

import "./registerInputs.css";

const RegisterInputs = () => {
  const { register, handleSubmit, errors } = useForm(); //Intialize react-hook-form

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstname" placeholder='Name' ref={register} /> {/* register an input */}
        <input type="text" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />   
        {errors.email && "Please enter a valid email address."}
        <input type="password" placeholder="Password" name="password" ref={register({required: true, minLength: 8})} />        
        {errors.password && "Password must be at least eight characters long."}
        <input id='register-btn' type="submit" />
      </form>
    </div>
  );
};

export default RegisterInputs;
