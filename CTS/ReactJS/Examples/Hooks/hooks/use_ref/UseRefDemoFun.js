import React, {useState, useRef} from "react"
import './Box.css'

export default function UseRefDemoFun() {
    let boxRef = useRef();
    function changeColor(myColor){
        console.log("boxRef: ", boxRef);
        boxRef.current.style.backgroundColor = myColor;
        // Following one js approach
        // let boxEl = document.getElementById("box");
        // boxEl.style.backgroundColor = myColor;
    }
    return (
        <div>
            <div className="box" ref={boxRef} id="box"></div>
            
            <div className="text-center mt-4">
                <button onClick={()=>changeColor('red') } className="btn btn-danger btn-lg">Red</button>
                <button onClick={ ()=>changeColor('green')} className="btn btn-success btn-lg">Green</button>
                <button onClick={ ()=>changeColor('blue')} className="btn btn-primary btn-lg">Blue</button>
            </div>
        </div>
    )    
}