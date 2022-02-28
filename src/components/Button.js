import React from 'react'
import  '../styles/Button.css'

function Button({text, theClick, type}) {

  return (
    <div>
      <button className = 'btn' onClick = {theClick} type = {type}>{text}</button>
    </div>
  )
}

export default Button