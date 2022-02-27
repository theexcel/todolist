import {useState} from 'react'
import Button from './components/Button'
import Todo from './components/Todo'
import Todomodal from './components/Todomodal';

function App() {
const [openModal, setOpenModal] = useState(false)

function handleClick(){
  setOpenModal(true);
}


  return(
  <div>
    <Todo theClick = {handleClick}/>
    {openModal && <Todomodal closeModal = {setOpenModal}/>}
    </div>
  );
}

export default App;
