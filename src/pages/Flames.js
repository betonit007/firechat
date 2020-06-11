import React, { useEffect } from 'react'
import { createFlame } from '../firebase/firebase.utils'



const Flames = () => {
    
    useEffect(() => {
        createFlame()
       
       })


    return (
        <div>
            FLAME SECTION
        </div>
    )
}

export default Flames
