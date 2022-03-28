import React, {useState} from "react"
import Component6 from "./Component6"
import CounterContexxt from "./CounterContext";

class Component5 extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h3>class based Component-5</h3>
                <CounterContexxt.Consumer>
                    { (counter)=>  <h3>Current Count = {counter}</h3>}
                </CounterContexxt.Consumer>
                <Component6 ></Component6>
            </div>
        )
    }
}

export default Component5;