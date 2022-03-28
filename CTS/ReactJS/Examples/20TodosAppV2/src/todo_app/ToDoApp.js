import React from "react"
import './ToDoApp.css'
class ToDoApp extends React.Component{
    constructor() {
        super()
        this.state = {
            task: '',
            taskList: []
        }
    }
    taskChangeHandler=(event)=> {
        // console.log(event.target.value);
        let { task } = this.state;
        this.setState({task: event.target.value})

    }
    addTask = () => {
        let { task, taskList } = this.state;
        taskList.push(task);
        console.log(taskList);
        this.setState({task:'', taskList})
    }
    deleteTask = (ind) => {
        // alert("Hello"+ind)
        let { taskList } = this.state;
        taskList.splice(ind, 1);
        this.setState({taskList})
    }
    render() {
        return (
            <div className="container">
                <h3>To do List App</h3>
                <div className="row">
                    <div className="col-md-2 text-end">
                        <label>Enter Your Task:</label>
                    </div>
                    <div className="col-md-8">
                        <input className="form-control"
                            value={this.state.task}
                            onChange={ this.taskChangeHandler}></input>
                    </div>
                    <div className="col-md-2 text-start">
                        <button onClick={this.addTask}>Add Task</button>
                    </div>
                </div>
                <div>
                    <h3 className="text-start">My todos List</h3>
                    {
                        this.state.taskList.map((task, ind) => {
                            return (
                                <div key={ind} className="card">
                                    <div className="row">
                                        <div className="col-md-10"> 
                                            <h3 className="text-start">{ ind +1 }. {task}</h3>
                                        </div>
                                        <div className="col-md-2"> 
                                            <h3 className="text-start delete-icon"
                                                onClick={()=>this.deleteTask(ind)}>X</h3>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default ToDoApp