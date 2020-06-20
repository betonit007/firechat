import React from 'react'
import RegisterInputs from '../../components/input/RegisterInputs'
import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
    return (
        <div className='register-body'>
            <h2>Register</h2>
            <RegisterInputs />
            <Link to='/'>Already have an account? Click here to sigin</Link>
        </div>
    )
}

export default Register
