import React from "react";
import { useForm } from "react-hook-form";
import { createFlame } from "../../firebase/firebase.utils";

import "./input.css";

const Input = ({ authState }) => {
  
  const { register, handleSubmit, errors } = useForm(); //Intialize react-hook-form

  const onSubmit = (data, e) => { 
   createFlame(data.flame, authState.currentUser)
   e.target.reset()
  };

  return (
    <div className="form-body flame-submit">
      <form id='flame-input-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          name="flame"
          placeholder="Enter Flame..."
          ref={register({ required: true })}
        />
        {errors.flame && "Please enter a flame."}
        <input className='flame-btn' type="submit" value='&#128367;'/>
      </form>
    </div>
  );
};

export default Input;
