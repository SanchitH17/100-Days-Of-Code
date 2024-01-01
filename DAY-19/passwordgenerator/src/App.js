import React, { useEffect, useRef } from "react";
import "./App.css";
import { Button, Center, Spinner } from "@chakra-ui/react";
import { useState, useCallback } from "react";

function App() {
  const [Length, setLength] = useState(8);
  const [numallowed, setnumberallowed] = useState(false);
  const [charallowed, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const [loadind, setLoading] = useState(false);
  const [done, setDOne] = useState(false);
  const [color, setColor] = useState("black");
  const passwordRef = useRef(null);

  const handleclicks = () => {
    setLoading(!loadind);
    const timer = setTimeout(() => {
      setLoading(false);
      setDOne(!done);
      window.navigator.clipboard.writeText(password);
    }, 1000);
    return () => clearTimeout(timer);
  };

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numallowed) str += "0123456789";
    if (charallowed) str += "!@$%^&*(){}_+";
    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numallowed, charallowed, setPassword, Length]);

  useEffect(() => {
    passwordGenerator();
  }, [setPassword, numallowed, charallowed, Length]);

  return (
    <div className="App" style={{ backgroundColor: color, width: "100%", height: "100vh" }}>
      <h1 style={{ fontSize: "28px", color: "white", fontWeight: "650", textDecoration: "underline" }} ref={passwordRef}>
        Password Generator
      </h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", height: "60px" }}>
        <input type="text" value={password} style={{ width: "60%", height: "45px", fontWeight: "bolder", textAlign: "center", fontSize: "28px" }}></input>
        &nbsp;
        <Button colorScheme="blue" onClick={handleclicks} style={{ width: "20%", height: "45px" }}>
          {loadind ? <Spinner /> : done ? "Copied to Clipboard" : "Copy"}
        </Button>
      </div>
      <input type="range" min={8} max={32} value={Length} onChange={(e) => setLength(e.target.value)} style={{ width: "60%", marginTop: "20px", margin: "auto" }}></input>
      <label style={{ color: "white", marginTop: "10px", textAlign: "center", display: "block" }}>Length : {Length}</label>
      <div style={{ display: "flex", justifyContent: "space-betweem", margin:"auto", marginTop: "20px",  }}>
        <div>
          <input type="checkbox" defaultChecked={numallowed} onChange={() => setnumberallowed((prev) => !prev)}></input>
          <label style={{ color: "white", marginLeft: "5px" }}>Numbers in Password</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={charallowed} onChange={() => setChar((prev) => !prev)}></input>
          <label style={{ color: "white", marginLeft: "5px" }}>Special Character in Password</label>
        </div>
      </div>
      <Center style={{ position: "absolute", bottom: "10px", width: "100%" }}>
        <Button colorScheme="yellow" onClick={() => setColor("yellow")}>
          Yellow
        </Button>
        <Button colorScheme="pink" onClick={() => setColor("pink")}>
          PINK
        </Button>
        <Button colorScheme="green" onClick={() => setColor("green")}>
          GREEN
        </Button>
        <Button colorScheme="gray" onClick={() => setColor("gray")}>
          GRAY
        </Button>
        <Button colorScheme="orange" onClick={() => setColor("orange")}>
          ORANGE
        </Button>
        <Button colorScheme="red" onClick={() => setColor("red")}>
          RED
        </Button>
        <Button colorScheme="cyan" onClick={() => setColor("cyan")}>
          CYAN
        </Button>
        <Button color="black" onClick={() => setColor("black")}>
          BLACK
        </Button>
      </Center>
    </div>
  );
}

export default App;
