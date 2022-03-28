import React, {useState} from "react"
import Component2 from "./Component2";
import CounterContexxt from "./CounterContext";

export default function ContextFunComponent() {
    let [counter, setCounter] = useState(0);
    return (
        <CounterContexxt.Provider value={counter}>
            <div className="text-center">
                <h3>Component-1</h3>
                <h3>Current Count = {counter}</h3>
                <button onClick={() => setCounter(counter + 1)}>Click Me</button>
                <Component2></Component2>
            </div>
        </CounterContexxt.Provider>
    )
}