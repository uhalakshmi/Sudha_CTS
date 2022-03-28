import React from "react"


function Task(props) {
    return (
        <div  className="card">
            <div className="row">
                <div className="col-md-10"> 
                    <h3 className="text-start">{ props.index +1 }. {props.task}</h3>
                </div>
                <div className="col-md-2"> 
                    <h3 className="text-start delete-icon"
                        onClick={() => props.deleteTask(props.index)}
                    >X</h3>
                </div>
            </div>
        </div>
    )
}

export default Task;