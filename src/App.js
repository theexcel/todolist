import {useState} from 'react'
import Button from './components/Button'
import Todo from './components/Todo'

function App() {
const [openModal, setOpenModal] = useState(false)

const handleClick = () => console.log('excel')
  return(
  <div>
    <Todo theClick = {handleClick}/>
    <button>Yehbhgkhkhhjkhs</button>
    </div>
  );
}

export default App;
