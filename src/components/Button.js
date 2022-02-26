import React from 'react'
import  '../styles/Button.css'

function Button({text, theClick}) {

  return (
    <div>
      <button className = 'btn' onClick = {theClick}>{text}</button>
    </div>
  )
}

export default Button