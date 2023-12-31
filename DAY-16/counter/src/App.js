import './App.css';
import {useState} from 'react'
function App() {
  const [counter , setCounter] = useState(0); 
  const handleincreement = ()=>{
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
  }
  const handledecreement = ()=>{
    if(counter >= 1)
    setCounter(counter-1);
  }
  return (
    <div className="App">
      <h1>Counter App </h1>
      <h2> {counter}</h2>

      <button onClick={handleincreement}> Increement </button>
      <button onClick={handledecreement}> Decreement </button>

    </div>
  );
}

export default App;
