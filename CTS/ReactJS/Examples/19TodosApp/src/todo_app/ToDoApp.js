import React from "react";
import './ToDoApp.css'
class ToDoApp extends React.Component{
    constructor() {
        super();
        this.state = {
            task: "",
            todosList: [],
        }
        this.addTask = this.addTask.bind(this);
    }
    addTask() {
        // alert("Hello");
        let { task, todosList } = this.state;
        todosList.push(task);
        console.log(todosList);
        this.setState({ task:'', todosList})
    }
    changeHandler = (event) => {
        // console.log(event.target.value);
        let task = event.target.value;
        this.setState({task})
        // event.source.
    }
    deleteTask = (ind) => {
        console.log(ind);
        // alert("Hello " + ind)
        let { todosList } = this.state;
        todosList.splice(ind, 1);
        this.setState({todosList})
        
    }
    render() {
        return (
            <div>
                <h3>ToDo App</h3>
                <div className="row">
                    <div className="float-start">
                        <div className="col-md-2 float-start text-end px-2">
                            <label>Todo Task:</label>
                        </div>
                        
                        <div className="col-md-6 float-start">
                            <input className="form-control col-md-6"
                                name="task"
                                value={this.state.task}
                                onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md-2 float-start text-start px-3">
                            <button className="btn btn-primary" onClick={this.addTask}>Add Task</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-start">MyTods List:</h3>
                    {
                        this.state.todosList.map((task, ind) => {
                            return (
                                <div className="card " key={ind}>
                                    <div className="row">
                                        <div className="col-md-10 float-start">
                                            <h3 className="text-start">{ ind+1}. { task}</h3>
                                        </div>
                                        <div className="col-md-2 float-start">
                                            <h3 className="float-end text-danger del-icon "
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


export default ToDoApp;