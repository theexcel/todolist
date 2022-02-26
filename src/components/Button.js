import React from 'react'
import  '../styles/Button.css'

function Button({text, letsClick}) {
 

  return (
    <div>
      <button className = 'btn' onClick = {letsClick}>{text}</button>
   
  
    </div>
  )
}

export default Button