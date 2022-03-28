import React, {useState} from 'react'

export default function TodoApp() {
    let [task, setTask] = useState('');
    let [taskList, setTaskList] = useState([]);
    
    return (
        <div>
            <h3 className="text-center">Todo App</h3>
            <div className="row">
                <div className="col-md-2 text-end">
                    Enter Task:
                </div>
                <div className="col-md-8">
                    <input type="text" className="form-control"
                        value={ task}
                        onChange = {(e)=>setTask(e.target.value)}
                    ></input>
                </div>
                <div className="col-md-2">
                    <button onClick={() => {
                        setTaskList([...taskList, task])
                        setTask('');
                        // console.log(taskList);
                        }
                    }>Add Task</button>
                </div>
            </div>
            <div>
                <h3>Todos List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>SNo</th>
                            <th className="text-start">Task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        taskList.map((task, ind) => {
                            return <tr key={ind}>
                                <td>{ ind+1}</td>
                                <td>{ task}</td>
                                <td><h3 onClick={() => {
                                    taskList.splice(ind, 1);
                                    setTaskList([...taskList]);
                                    console.log(taskList);
                                }}>X</h3></td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
    