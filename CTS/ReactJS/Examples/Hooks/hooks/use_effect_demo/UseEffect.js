import React, {useEffect, useState} from "react"

export default function UseEffect() {
    let [counter, setCounter] = useState(0);
    let [secondCounter, setSecondCounter] = useState(0);
    useEffect(() => {
        // by default this code is executed after each render
        console.log("I am from useEffect");
    }, [])
    useEffect(() => {
        // by default this code is executed after each render
        console.log("I am from useEffect for secondCounter");
    },  [secondCounter])
    console.log("i am from component");
    return (
        <div>
            <h3>useEffect Demo</h3>
            <h3>First Count: {counter}</h3>
            <h3>Second Count: {secondCounter}</h3>
            <button onClick={() => setCounter(counter + 1)}>Click Me</button>
            <button onClick={()=>setSecondCounter(secondCounter + 1)}>Click Me for 2nd Counter</button>
        </div>
    )
}