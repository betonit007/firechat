import React from 'react'
import { signInWithGoogle } from './firebase/firebase.utils'
import './App.css'

const App = () => {
    return (
        <div>
            Hello World
            <button onClick={signInWithGoogle}>Click</button>
        </div>
    )
}

export default App
