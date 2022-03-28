import React from 'react';
import './EmployeesDisplay.css'
          
class EmployeesDisplay extends React.Component{
    constructor() {
        super();
        console.log("from constructor of EmployeesDisplay");
    }
    editEmployee(e, emp) {
        console.log(e.target);
        let rows = document.getElementsByClassName('current-record');
        rows = [...rows];
        rows.forEach(row => {
            row.classList.remove('current-record');
        })
        let rowEl = e.target.parentElement.parentElement;
        rowEl.classList.add('current-record');
        this.props.switchForm("edit", emp)
    }
    render() {
        console.log("from render of EmployeesDisplay");
        console.log(this.props.employeesList);
        console.log(this.props);
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Employee Number</th>
                            <th>Employee Name</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Salary</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.employeesList.map((emp, ind) => {
                                return <tr key={ind}>
                                    <td>{ emp.id}</td>
                                    <td>{ emp.emp_name}</td>
                                    <td>{ emp.email}</td>
                                    <td>{ emp.job}</td>
                                    <td>{emp.salary}</td>
                                    <td><button type="button" className="btn btn-link"
                                        onClick={(e)=>this.editEmployee(e, emp)}
                                        >Edit</button></td>
                                    <td><button type="button" className="btn btn-link"
                                        onClick={()=>this.props.deleteEmployee(emp.id) }
                                    >Delete</button></td>
                                    
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeesDisplay;