import React from 'react'
import Button from './Button'
import '../styles/Todoapp.css'


function Todoapp() {
  


  return (
    <div className='container'>
      <header className = 'header'>
        <h1 className='heading'>pawaTask</h1>
        <div className = 'header-btn-style'>
        <Button text = 'Add a new task' />
        </div>
        </header>
        <div className='line'></div>
        <div className = 'text'>
          <p>You do not have any tasks<span className = 'add'><a>add a new task</a></span></p>
        </div>
        {/* <div>
          <div>
          <input type = 'checkbox'/>
          <p>Task title lorem ipsum task title dolor</p>
        </div>
        <div>

        </div>
        </div>
        <div className = 'line'></div> */}
      
    </div>
  )
}

export default Todoapp