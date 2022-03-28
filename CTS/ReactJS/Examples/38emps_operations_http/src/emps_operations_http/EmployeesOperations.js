import React from 'react';
import axios from 'axios'

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
    componentDidMount() {
        axios.get("http://localhost:8082/employees")
            .then((res) => {
                console.log(res.data);
                this.setState({employeesList: res.data})
            })
            .catch((err) => {
                console.log(err);
            })
    }
    notify = (msg) => toast(msg);

    addEmployee = (employeeRecord) => {
        console.log("from addEmployee of EmployeesOperations");
        let { employeesList } = this.state;
        axios.post("http://localhost:8082/employees", employeeRecord)
            .then((res) => {
                console.log(res.data);
                employeesList.push(res.data)
                this.setState({ employeesList })
                this.notify("one employee is added successfully");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    deleteEmployee = (id) => {
        const url = `http://localhost:8082/employees/${id}`
        axios.delete(url)
            .then((res) => {
                console.log(res.data);
                this.notify("one employee is deleted successfully");
                axios.get("http://localhost:8082/employees")
                    .then((res) => {
                        console.log(res.data);
                        this.setState({employeesList: res.data})
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    switchForm = (formFlag, currentEditEmp) => {
        this.setState({ formFlag, currentEditEmp });
    }
    updateEmployee = (employee, formFlag) => {
        console.log("from updateEmployee of EmployeesOperations");
        console.log("employee: ", employee);
        console.log("formFlag: ", formFlag);
        // let { employeesList } = this.state;
        // employeesList.forEach((emp) => {
        //     if (emp.id === employee.id) {
        //         emp.empName = employee.empName
        //         emp.email = employee.email
        //         emp.job = employee.job
        //         emp.salary = employee.salary
        //     }
        // })
        // console.log("After Modification employee: ", employee);
        // this.setState({formFlag, employeesList})
        const url = `http://localhost:8082/employees/${employee.id}`
        axios.put(url, employee)
            .then((res) => {
                console.log(res.data);
                this.notify("one employee is updated successfully");
                axios.get("http://localhost:8082/employees")
                    .then((res) => {
                        console.log(res.data);
                        this.setState({employeesList: res.data, formFlag})
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch((err) => {
                console.log(err);
            })
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
                <ToastContainer />
            </div>
        )
    }
}

export default EmployeesOperations;
