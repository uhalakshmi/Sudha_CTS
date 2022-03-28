import React from 'react';
import CreateEmployeeForm from './CreateEmployeeForm';
import EditEmployeeForm from './EditEmployeeForm';
import EmployeesDisplay from './EmployessDisplay';

class EmployeesOperations extends React.Component{
    constructor() {
        super();
        console.log("from constructor of EmployeesOperations");
        this.state = {
            employeesList: [],
            currentEditEmp: {},
            formFlag: 'create'
        }
    }
    addEmployee = (employeeRecord) => {
        console.log("from addEmployee of EmployeesOperations");
        let { employeesList } = this.state;
        employeeRecord.empNo = employeesList.length + 1
        employeesList.push(employeeRecord);

        console.log(employeesList);
        this.setState({ employeesList });
    }
    deleteEmployee = (empNo) => {
        console.log("from deleteEmployee of EmployeesOperations");
        let { employeesList } = this.state;
        employeesList = employeesList.filter((emp) => emp.empNo != empNo);
        this.setState({ employeesList });
    }
    switchForm = (formFlag, currentEditEmp) => {
        this.setState({ formFlag, currentEditEmp });
    }
    updateEmployee = (employee, formFlag) => {
        console.log("from updateEmployee of EmployeesOperations");
        console.log("employee: ", employee);
        console.log("formFlag: ", formFlag);
        let { employeesList } = this.state;
        employeesList.forEach((emp) => {
            if (emp.empNo === employee.empNo) {
                emp.empName = employee.empName
                emp.email = employee.email
                emp.job = employee.job
                emp.salary = employee.salary
            }
        })
        console.log("After Modification employee: ", employee);
        this.setState({formFlag, employeesList})
    }
    render() {
        console.log("from render of EmployeesOperations");
        let { formFlag, currentEditEmp } = this.state;
        return (
            <div>
                <h3>Employees Operations App</h3>
                {formFlag==='create' && 
                    <CreateEmployeeForm addEmployee={this.addEmployee}></CreateEmployeeForm>
                }
                {formFlag==='edit' && 
                    <EditEmployeeForm updateEmployee={this.updateEmployee}
                        emp={ currentEditEmp}
                    ></EditEmployeeForm>
                }
                
                <EmployeesDisplay employeesList={this.state.employeesList}
                    deleteEmployee={this.deleteEmployee}
                    switchForm = {this.switchForm}
                ></EmployeesDisplay>
            </div>
        )
    }
}

export default EmployeesOperations;
