import React from 'react'
import '../styles/TheTodos.css'
import calendar from '../Image/calendar.svg'
import comment from '../Image/commenticon.svg'
import editicon from '../Image/editicon.svg'


function TheTodos({todos, setTodos, editTodo}) {
//   const todoFunct = () => {
//     todos && todos.map((todo) => console.log(todo))
//   }
//   todoFunct()


  return (
    <div>
      <div className="">
        {todos &&
          todos.map((todo) => (
            <div key={todo.id} >
              <div className="list-container">
              <input type="checkbox" className="checkbox" />
              <div className="container-title">{todo.text}</div>
              <div className="calendar-icon">
                <img src={calendar} width="30" height="30" />
              </div>
              <div className="date-container">
                {todo.dayDate}/{todo.monthDate}/{todo.yearDate}
              </div>
              <div className="comment-icon">
                <div className="subcomment">
                  <img src={comment} width="20" height="20" />
                </div>
              </div>
              <div className="edit-icon" >
                <div className="subedit" onClick = {editTodo}>
                  <img src={editicon} width="20" height="20" />
                </div>
              </div>
              </div>
              <div className='line'></div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TheTodos
