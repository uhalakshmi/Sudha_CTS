import React from 'react'
import axios from 'axios'

class GetEmps extends React.Component{
    constructor() {
        super();
        this.state = {
            emps: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8083/employees")
            .then((res) => {
                console.log(res.data);
                this.setState({emps: res.data})
            })
            .catch((err) => {
                
            })
    }
    render() {
        let { emps } = this.state;
        return (
            <div>
                <h3>Demo on HTTP get</h3>
                <table className="table">
                    <thead>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                    </thead>
                {
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

export default GetEmps;