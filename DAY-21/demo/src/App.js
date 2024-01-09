
import React, { useState } from 'react';
import './App.css';

function App() {
  const[number , setNumber] = useState(["red", "blue" , "green"]);
  const handlecolor = ()=>{
        let index = 0 ;
        index = index+1 % number.length;
        return number[index];  
  }
   return (
    <div className="App" style={{background: { setInterval(colorchange, 1000)} }}>
        <h1> DEMO APP </h1>
         
    </div>
  );
}

export default App;
