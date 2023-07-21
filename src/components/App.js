
import React,{useState} from "react";
import './../styles/App.css';
import Parent from "./Parent";
import Child from "./Child";

const App = () => {
  let [text,setText] = useState("");
  return (
    <div>
        <Parent text = {text} />
        <Child setText={setText} />
    </div>
  )
}

export default App
