import React from 'react'
import axios from 'axios'

class PostEmp extends React.Component{
    constructor() {
        super();
        this.state = {
            emps: []
        }
    }
    componentDidMount() {
        let emp = {
            
            "emp_name": "Bharath",
            "email": "bharath@gmail.com",
            "salary": 34000
          }
        axios.post("http://localhost:8083/employees", emp)
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
                <h3>Demo on HTTP Post</h3>
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

export default PostEmp;