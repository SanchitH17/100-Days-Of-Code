  import logo from './logo.svg';
  import './App.css';
  import {useState} from 'react';
  function App() {
    const [state , setState] = useState(false)
    const handleclick = ()=>{
        setState(!state)
    }
    return (
      <div className="App" >
      <h1 style={{color:"red" , textAlign : "center"}}>Button Controller </h1>
      <button onClick={handleclick}> 
      {state ? 'Press Me' : 'Release Me'} 
      </button>
      </div>
    );
  }

  export default App;
