import React from 'react';

class EmployeesDisplay extends React.Component{
    constructor() {
        super();
        console.log("from constructor of EmployeesDisplay");
    }
    render() {
        console.log("from render of EmployeesDisplay");
        console.log(this.props.employeesList);
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
                                    <td>{ emp.salary}</td>
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