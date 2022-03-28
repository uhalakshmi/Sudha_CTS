import React from 'react';

class EmployeesDisplay extends React.Component{
    constructor() {
        super();
        console.log("from constructor of EmployeesDisplay");
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
                                    <td>{ emp.empNo}</td>
                                    <td>{ emp.empName}</td>
                                    <td>{ emp.email}</td>
                                    <td>{ emp.job}</td>
                                    <td>{emp.salary}</td>
                                    <td><button type="button" className="btn btn-link"
                                        onClick={()=>this.props.switchForm("edit", emp)}
                                        >Edit</button></td>
                                    <td><button type="button" className="btn btn-link"
                                        onClick={()=>this.props.deleteEmployee(emp.empNo) }
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