import React, {useState} from 'react'
import { connect } from 'react-redux';
import mapDispatchToProps from './actions/todos_actions';
import mapStateToProps from './state/todos_state';

function TodoApp(props) {
    let [task, setTask] = useState('');
    console.log("props: ", props);
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
                        props.addTask(task);
                        setTask('');
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
                        props.todosList.map((task, ind) => {
                            return <tr key={ind}>
                                <td>{ ind+1}</td>
                                <td>{ task}</td>
                                <td><h3 onClick={() => {
                                    props.deleteTask(ind);
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

    