import React, { useState } from "react"
import './App.css';
import {Button , Center} from "@chakra-ui/react"
function App() {
  const [color, setColor] = useState("white");
  return (
    <div style={{backgroundColor : color , width: "100%" , height: "100vh"}}>
      <Center>
        <Button colorScheme='yellow' onClick={()=>{setColor("yellow")}}>Yellow</Button>
        <Button colorScheme='pink'onClick={()=>{setColor("pink")}} >PINK</Button>
        <Button colorScheme='green'onClick={()=>{setColor("green")}}>GREEN</Button>
        <Button colorScheme='gray'onClick={()=>{setColor("gray")}}>GRAY</Button>
        <Button colorScheme='orange'onClick={()=>{setColor("orange")}}>ORANGE</Button>
        <Button colorScheme='red'onClick={()=>{setColor("red")}}>RED</Button>
        <Button colorScheme='cyan'onClick={()=>{setColor("cyan")}}>CYAN</Button>
        <Button color='black'onClick={()=>{setColor("black")}}>BLACK</Button>
      
        </Center>
    </div>
  );
}

export default App;
