import React, { useState } from 'react'
import { createFlame } from '../../firebase/firebase.utils'

import './input.css'

const Input = () => {

    const [ input, setInput ] = useState("")

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
      e.preventDefault()
      createFlame(input)
    }
 
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Flame:
          <input type="text" value={input} placeholder='Enter Flame..' onChange={e => handleChange(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default Input
