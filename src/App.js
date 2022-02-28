import React, {useState, useEffect} from 'react'
import Button from './components/Button'
import Todo from './components/Todo'
import Todomodal from './components/Todomodal';


function App() {
const [openModal, setOpenModal] = useState(false)
const [todos, setTodos] = useState([])
const [input, setInput] =useState(() => {
  // getting stored value
  const saved = localStorage.getItem('todo');
  const initialValue = JSON.parse(saved);
  return initialValue || "";
});
const [description, setDescription] = useState('')
const [dayDate, setDayDate ] = useState('')
const [monthDate, setMonthDate] = useState('')
const [yearDate, setYearDate] = useState('')
const[priority, setPriority] = useState('')
const[comments, setComments] = useState('')

useEffect(() => {
  localStorage.setItem('todo', JSON.stringify(input))
}, [input])



function handleClick(){
  setOpenModal(true);
}

  return(
  <div>
    <Todo theClick = {handleClick} todos = {todos} setTodos = {setTodos} input = {input} setInput = {setInput} 
    description = {description} setDescription = {setDescription}
    dayDate = {dayDate} setDayDate = {setDayDate} 
    monthDate = {monthDate} setMonthDate ={setMonthDate}
    yearDate = {yearDate} setYearDate = {setYearDate}
    priority = {priority} setPriority = {setPriority}
    comments = {comments} setComments = {setComments}
    
    />

    {openModal && <Todomodal closeModal = {setOpenModal} todos = {todos} setTodos = {setTodos}
    input = {input} setInput = {setInput} 
    description = {description} setDescription = {setDescription}
    dayDate = {dayDate} setDayDate = {setDayDate} 
    monthDate = {monthDate} setMonthDate ={setMonthDate}
    yearDate = {yearDate} setYearDate = {setYearDate}
    priority = {priority} setPriority = {setPriority}
    comments = {comments} setComments = {setComments}
    />}
  
    </div>
  );
}

export default App;
