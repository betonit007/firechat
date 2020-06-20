import React from 'react'
import './flame.css'

const Flame = ({ flame, authState }) => {
     
    const {  userId, photoUrl } = flame
    console.log(flame, userId, photoUrl)

    return (
        <div className='single-flame '>
            {flame.flame}
        </div>
    )
}

export default Flame
