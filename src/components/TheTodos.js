import React from 'react'
import '../styles/TheTodos.css'

function TheTodos({todos, setTodos}) {
//   const todoFunct = () => {
//     todos && todos.map((todo) => console.log(todo))
//   }
//   todoFunct()


  return (
    <div >
          <div className=''>
            {todos && todos.map((todo) => (<div key = {todo.id} className = 'list-container' >
              <input type = 'checkbox' className='checkbox'/>
              <div className= 'container-title'>{todo.text}</div>
            <div className= 'date-container'>{todo.dayDate}/{todo.monthDate}/{todo.yearDate}</div>
            <div className='comment-icon'>comment</div>
            <div className = 'edit-icon'></div>
            </div>))}
        </div> 
    </div>
  )
}

export default TheTodos