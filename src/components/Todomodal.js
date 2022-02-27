import React from 'react'
import  '../styles/Todomodal.css'
import Button from '../components/Button'


function Todomodal({closeModal}) {
  return (
    <div className = 'modal'>
        <div className = 'modal-subcontainer'>
        <header className = 'newtask-container'>
            <h2>Newtask</h2>
            <button className='calcel-btn' onClick={() => closeModal(false)}>X</button>
        </header>
        <div className = 'title-container'>
            <p>Title:</p>
            <input className='input-title'></input>
        </div>
        <div className='description-container'>
            <p>Description:</p>
            <textarea className='description-input'></textarea>
        </div>
        <div className='date-input-container'>
            <p>set due date</p>
            <input placeholder='DD' ></input>
            <input placeholder='MM' style = {{marginLeft: '5px'}}></input>
            <input placeholder='AAAA' style = {{marginLeft: '5px'}}></input>
        </div>
        <div className = 'priority-container'>
            <p>Priority</p>
            <select multiple size = '3'>
                <option value = 'Low'></option>
                <option value = 'Medium'></option>
                <option value = 'High'></option>
            </select>
        </div>
        <div className='comments-container'>
            <p>Comments:</p>
            <textarea className='comments-input'></textarea>
        </div>
        <div className='btn-modal-container'>
            {/* <button className = 'btn-add-modal'>Add to your task</button> */}
        <Button text = 'Add new task'/>
        </div>
        </div>
    </div>
  )
}

export default Todomodal