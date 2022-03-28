import React from "react"
import Component2 from "./Component2"
import Decrement from "./Decrement"
import Display from "./Display"
import Increment from "./Increment"
import Reset from "./Reset"

export default function CounterApp() {
    return (
        <div className="text-center">
            <Display></Display>
            <div>
                <Increment></Increment>
                <Decrement></Decrement>
                <Reset></Reset>
            </div>
            <Component2/>
        </div>
    )
}