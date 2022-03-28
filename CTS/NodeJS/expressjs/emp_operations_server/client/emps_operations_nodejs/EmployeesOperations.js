import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CreateEmployeeForm from './CreateEmployeeForm';
import EditEmployeeForm from './EditEmployeeForm';
import EmployeesDisplay from './EmployessDisplay';
import EmployeesServices from './services/EmployeesServices'

toast.configure();

function EmployeesOperationsNodeJS() {
    let [employeesList, setEmployeesList] = useState([]);
    let [currentEditEmp, setCurrentEditEmp] = useState({});
    let [formFlag, setFormFlag] = useState('create');
    
    useEffect(() => {
        EmployeesServices.getEmployees()
            .then((res) => {
                console.log(res.data);
                setEmployeesList(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
     },  [])
    
    const notify = (msg) => toast.success(msg, {});

    const addEmployee = (employeeRecord) => {
        console.log("from addEmployee of EmployeesOperations");
        EmployeesServices.addEmployee(employeeRecord)
            .then((res) => {
                console.log(res.data);
                setEmployeesList([...employeesList, res.data])
                notify("one employee is added successfully");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const deleteEmployee = (id) => {
        EmployeesServices.deleteEmployee(id)
            .then((res) => {
                console.log(res.data);
                notify("one employee is deleted successfully");
                EmployeesServices.getEmployees()
                    .then((res) => {
                        console.log(res.data);
                        setEmployeesList(res.data)
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const switchForm = (formFlag, currentEditEmp) => {
        setCurrentEditEmp(currentEditEmp);
        setFormFlag(formFlag)
    }
    const updateEmployee = (employee, formFlag) => {
        console.log("from updateEmployee of EmployeesOperations");
        console.log("employee: ", employee);
        console.log("formFlag: ", formFlag);
        
        EmployeesServices.updateEmployee(employee)
            .then((res) => {
                console.log(res.data);
                notify("one employee is updated successfully");
                EmployeesServices.getEmployees()
                    .then((res) => {
                        console.log(res.data);
                        setEmployeesList(res.data)
                        setFormFlag(formFlag)
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch((err) => {
                console.log(err);
            })
    }
   
    return (
        <div>
            <h3>Employees Operations App</h3>
            {formFlag==='create' && 
                <CreateEmployeeForm addEmployee={addEmployee}></CreateEmployeeForm>
            }
            {formFlag==='edit' && 
                <EditEmployeeForm updateEmployee={updateEmployee}
                    emp={ currentEditEmp}
                ></EditEmployeeForm>
            }
            
            <EmployeesDisplay employeesList={employeesList}
                deleteEmployee={deleteEmployee}
                switchForm = {switchForm}
            ></EmployeesDisplay>
            {/* <ToastContainer /> */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </div>
    )
}

export default EmployeesOperationsNodeJS;
