import Todoapp from './components/Todoapp'
import Taskmodal from './components/Taskmodal';
import {useState} from 'react'

function App() {
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true);
    console.log('favour')
 }

  return (
    <div className="App">
   <Todoapp letsClick = {handleClick}/>
   <Taskmodal/>
   <button onClick = {() => console.log('yo')}>bro</button>
    </div>
  );
}

export default App;
