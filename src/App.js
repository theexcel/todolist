import React, {useState, useEffect} from 'react'
import Button from './components/Button'
import Todo from './components/Todo'
import Todomodal from './components/Todomodal';
import OtherModal from './components/OtherModal'

//  const user = localStorage.getItem('todos') || '[]'

function App() {
const [openModal, setOpenModal] = useState(false)
const [todos, setTodos] = useState([])
const [input, setInput] =useState('');
const [description, setDescription] = useState('')
const [dayDate, setDayDate ] = useState('')
const [monthDate, setMonthDate] = useState('')
const [yearDate, setYearDate] = useState('')
const[priority, setPriority] = useState('')
const[comments, setComments] = useState('')



// useEffect(() => {
//   localStorage.setItem('todos', JSON.stringify(todos))
// }, [todos])



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
