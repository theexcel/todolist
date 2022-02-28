import React, {useState} from 'react'
import  '../styles/Todomodal.css'
import Button from '../components/Button'


function Todomodal({closeModal, todos, setTodos, description, setDescription, dayDate, setDayDate, yearDate, setYearDate,
monthDate, setMonthDate, input, setInput, priority, setPriority, comments, setComments}) {
  
    // const [input, setInput] = useState('')
    // const [todos, setTodos] = useState([])
    // const [description, setDescription] = useState('')
   
    
    
const handleInputChange = e => setInput(e.target.value)
const handleDescriptionChange = e => setDescription(e.target.value)
const handleDayDate = e => setDayDate(e.target.value)
const handleMonthDate = e => setMonthDate(e.target.value)
const handleYearDate = e => setYearDate(e.target.value)
const handlePriority = e => setPriority(e.target.value)
const handleComments = e => setComments(e.target.value)

 const handleSubmit = e => {
        e.preventDefault()
        if(input !== ''){
            setTodos([
                ...todos, {
                    id: todos.length + 1,
                    text: input.trim(),
                    description: description.trim(),
                    dayDate: dayDate.trim(),
                    monthDate: monthDate.trim(),
                    yearDate: yearDate.trim(),
                    priority: priority.trim(),
                    comments: comments.trim(),
                }
            ])
        }
        setInput('')
        setDescription('')
        setDayDate('')
        setMonthDate('')
        setYearDate('')
        setPriority('')
        setComments('')

}

    

  return (
    <form className = 'modal' onSubmit = {handleSubmit}>
        <div className = 'modal-subcontainer'>
        <header className = 'newtask-container'>
            <h2>Newtask</h2>
            <div className='calcel-btn' onClick={() => closeModal(false)}>X</div>
        </header>
        <div className = 'title-container'>
            <p>Title:</p>
            <input className='input-title' value = {input} onChange = {handleInputChange} type = 'text'/>
        </div>
         <div className='description-container'>
            <p>Description:</p>
            <textarea className='description-input' value = {description} onChange={handleDescriptionChange}></textarea>
        </div>
         <div className='date-input-container'>
            <p>set due date</p>
            <input placeholder='DD' type = 'text' name = 'text' value = {dayDate} onChange = {handleDayDate}></input>
            <input placeholder='MM' style = {{marginLeft: '5px'}} value = {monthDate} onChange = {handleMonthDate}></input>
            <input placeholder='AAAA' style = {{marginLeft: '5px'}} value = {yearDate} onChange = {handleYearDate}></input>
        </div>
        <div className = 'priority-container'>
            <p>Priority</p>
            <select value = {priority} onChange = {handlePriority}>
                <option value = 'Low'>Low</option>
                <option value = 'Medium'>Medium</option>
                <option value = 'High'>High</option>
            </select>
        </div>
        <div className='comments-container'>
            <p>Comments:</p>
            <textarea className='comments-input' onChange={handleComments} value = {comments}></textarea>
        </div>
        <div className='btn-modal-container'>
            {/* <button className = 'btn-add-modal'>Add to your task</button> */}
        <Button text = 'Add new task' type = 'submit'/>
         </div> 
         </div>  
     </form>
  )
}

export default Todomodal