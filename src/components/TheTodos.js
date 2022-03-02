import React, { useState } from "react";
import "../styles/TheTodos.css";
import calendar from "../Image/calendar.svg";
import comment from "../Image/commenticon.svg";
import editicon from "../Image/editicon.svg";
import OtherModal from "./OtherModal";

function TheTodos({ todos, setTodos, editTodo }) {
  const [openEditModal, setEditOpenModal] = useState(false);
  const [opener, setOpener] = useState(false)

  const [openModal, setOpenModal] = useState(false);
  // const [task, setTask] = useState(todos)
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [dayDate, setDayDate] = useState("");
  const [monthDate, setMonthDate] = useState("");
  const [yearDate, setYearDate] = useState("");
  const [priority, setPriority] = useState("");
  const [comments, setComments] = useState("");
  const [currentTodoId, setCurrentTodoId] = useState("");

  function initialInput(id) {
    const taskList = [...todos];
    console.log(taskList);
    let selectedTask = taskList.filter((task) => task.id === id)[0];
    setInput(selectedTask.text);
    setDescription(selectedTask.description);
    setDayDate(selectedTask.dayDate);
    setMonthDate(selectedTask.monthDate);
    setYearDate(selectedTask.yearDate);
    setPriority(selectedTask.priority);
    setComments(selectedTask.comments);
    setCurrentTodoId(selectedTask.id);
    setEditOpenModal(true);
  }


  function initialComments(id){

    
  }

function handleDelete(id){
const findTodo = todos.filter(todo => todo.id !== id)
setTodos(findTodo)
setOpener(true)
}


  return (
    <div>
      <div className="">
{opener && <div className = 'validation'>Successfully completed task!</div>}
        {todos &&
          todos.map((todo) => (
            <div key={todo.id}>
              <div className="list-container">
                <input type="checkbox" className="checkbox" onClick = {() => handleDelete(todo.id)}/>
                <div className="container-title">{todo.text}</div>
                <div className="calendar-icon">
                  <img src={calendar} width="25" height="25" />
                </div>
                <div className="date-container">
                  {todo.dayDate}/{todo.monthDate}/{todo.yearDate}
                </div>
                <div className="comment-icon" onClick = {()=> initialComments(todo.id)}>
                  <div className="subcomment">
                    <img src={comment} width="20" height="20" />
                  </div>
                </div>
                <div
                  className="edit-icon"
                  onClick={() => initialInput(todo.id)}
                >
                  <div className="subedit">
                    <img src={editicon} width="20" height="20" />
                  </div>
                </div>
              </div>
              <div className="line"></div>
            </div>
          ))}
      </div>
      {openEditModal && (
        <OtherModal
          todoId={currentTodoId}
          setOpenModal={setEditOpenModal}
          todos={todos}
          setTodos={setTodos}
          input={input}
          setInput={setInput}
          description={description}
          setDescription={setDescription}
          dayDate={dayDate}
          setDayDate={setDayDate}
          monthDate={monthDate}
          setMonthDate={setMonthDate}
          yearDate={yearDate}
          setYearDate={setYearDate}
          priority={priority}
          setPriority={setPriority}
          comments={comments}
          setComments={setComments}
        />
      )}
    </div>
  );
}

export default TheTodos;
