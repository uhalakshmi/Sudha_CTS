import React from 'react'
import axios from 'axios'

class DeleteEmp extends React.Component{
    constructor() {
        super();
        this.state = {
            emps: []
        }
    }
    componentDidMount() {
        
        axios.delete("http://localhost:8084/employees/11")
            .then((res) => {
                console.log(res.data);
                // this.setState({emps: res.data})
            })
            .catch((err) => {
                
            })
    }
    render() {
        let { emps } = this.state;
        return (
            <div>
                <h3>Demo on HTTP Delete</h3>
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                    </thead>
                {emps.length!= 0 &&
                    emps.map((emp) => {
                        return <tr>
                            <td>{ emp.id}</td>
                            <td>{ emp.emp_name}</td>
                            <td>{ emp.email}</td>
                            <td>{ emp.salary}</td>
                        </tr>
                    })
                }
                </table>
            </div>
        )    
    }
}

export default DeleteEmp;