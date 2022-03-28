import React, {useState, useContext} from "react"
import CounterContexxt from "./CounterContext";

export default function Component6(props) {
    let counter = useContext(CounterContexxt);
    console.log("counter:" , counter);
    return (
        <div className="text-center">
            <h3>Function based Component-6 </h3>
            <h3>Current Count = {counter}</h3>
        </div>
    )
}