import React from 'react';
import CreateEmployeeForm from './CreateEmployeeForm';
import EmployeesDisplay from './EmployessDisplay';

class EmployeesOperations extends React.Component{
    constructor() {
        super();
        console.log("from constructor of EmployeesOperations");
        this.state = {
            employeesList: [],
        }
    }
    addEmployee = (employeeRecord) => {
        console.log("from addEmployee of EmployeesOperations");
        let { employeesList } = this.state;
        employeeRecord.empNo = employeesList.length + 1
        employeesList.push(employeeRecord);

        console.log(employeesList);
        this.setState({ employeeRecord });
    }
    render() {
        console.log("from render of EmployeesOperations");
        return (
            <div>
                <h3>Employees Operations App</h3>
                <CreateEmployeeForm addEmployee={this.addEmployee}></CreateEmployeeForm>
                <EmployeesDisplay employeesList= {this.state.employeesList}></EmployeesDisplay>
            </div>
        )
    }
}

export default EmployeesOperations;
