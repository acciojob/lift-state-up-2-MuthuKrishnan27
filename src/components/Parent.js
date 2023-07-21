import React from "react";
import './../styles/App.css';

const Parent = (props)=>{
    return (
        <div className="parent">   
          <h1>Parent component</h1>
          <p>{props.text}</p>
        </div>
    )
}

export default Parent