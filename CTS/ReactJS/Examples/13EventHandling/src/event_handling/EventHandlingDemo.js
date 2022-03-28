import React from "react";



function EventHandlingDemo() {
    function clickHandler() {
        alert('Hello')
    }
    return (
        
        <div>
            <button onClick={clickHandler}>ClickMe</button>
        </div>

    )

}

export default EventHandlingDemo;