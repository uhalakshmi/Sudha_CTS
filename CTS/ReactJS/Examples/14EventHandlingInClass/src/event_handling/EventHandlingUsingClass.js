import React from "react"


class EventHandlingUsingClass extends React.Component{

    clickHandler() {
        alert("Hello")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}


export default EventHandlingUsingClass