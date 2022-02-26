import React from 'react'
import '../styles/Todo.css'
import Button from './Button'

function Todo({theClick}) {
  return (
    <div className = 'todo-container'>
        <header className='header'>
            <h1 className = 'heading'>PawaTask</h1>
            <div className = 'header-btn-style'>
                <Button text = 'add a new task' onClick = {theClick}/>
            </div>

        </header>
<div className = 'line'></div>
<div className = 'text-style'>
    <span className = 'text'> You do not have any tasks<a className = 'add'>add a new task</a></span>
</div>
    </div>
  )
}

export default Todo