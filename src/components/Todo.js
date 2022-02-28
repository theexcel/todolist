import React, {useState} from 'react'
import '../styles/Todo.css'
import Button from './Button'
import TheTodos from './TheTodos'

function Todo({editTodo, theClick, todos, setTodos, input, description, setInput, setDescription, dayDate, setDayDate, monthDate, setMonthDate, yearDate,setYearDate,priority,
setPriority, comments, setComments}) {
// const [showTodo, setShowTodo] = useState(true)



  return (
    <div className = 'todo-container'>
        <header className='header'>
            <h1 className = 'heading'>PawaTask</h1>
            <div className = 'header-btn-style'>
                <Button text = 'Add a new task' theClick = {theClick}/>
            </div>

        </header>
<div className = 'line'></div>
{todos && todos.length === 0 ? <div className = 'text-style'>
    <span className = 'text'> You do not have any tasks<a onClick = {theClick} className = 'add' >add a new task</a></span>
</div>: <TheTodos editTodo = {editTodo} todos = {todos} setTodos = {setTodos} input = {input} setInput = {setInput} 
    description = {description} setDescription = {setDescription}
    dayDate = {dayDate} setDayDate = {setDayDate} 
    monthDate = {monthDate} setMonthDate ={setMonthDate}
    yearDate = {yearDate} setYearDate = {setYearDate}
    priority = {priority} setPriority = {setPriority}
    comments = {comments} setComments = {setComments}
    /> }
{/* {showTodo ? <div className = 'text-style'>
    <span className = 'text'> You do not have any tasks<a onClick = {theClick} className = 'add' >add a new task</a></span>
</div>: null}

<TheTodos todos = {todos} setTodos = {setTodos} input = {input} setInput = {setInput} 
    description = {description} setDescription = {setDescription}/> */}
    </div>
  )
}

export default Todo