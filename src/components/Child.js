import React from "react";
import './../styles/App.css';

const Child = (props)=>{
    let fun = props.setText;
    return (
        <div className="child">
            <h1>Child component</h1>
            <input type="text" 
            onChange={(e)=> fun(e.target.value)}>
            </input>
        </div>
    )
}

export default Child