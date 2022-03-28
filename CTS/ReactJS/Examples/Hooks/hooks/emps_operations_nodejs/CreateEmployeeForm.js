import React from 'react';
import EmployeesServices from './services/EmployeesServices'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class CreateEmployeeForm extends React.Component{
    constructor() {
        super();
        console.log("from constructor of CreateEmployeeForm");
        this.state = {
            emp_name: '',
            email: '',
            job: '',
            salary: '',

            emp_nameErr: "",
            emailErr: "",
            jobErr: "", 
            salaryErr: "",

        }
    }
    fieldChangeHandler = (e) => {
        // console.log("from fieldChangeHandler of CreateEmployeeForm");
        this.setState({ [e.target.name]: e.target.value });
    }
    notify = (msg) => toast.success(msg, {});
    createEmployee = (e) => {
        console.log("from createEmployee of CreateEmployeeForm");
        e.preventDefault();
        let employee = this.state;
        console.log(employee);
        EmployeesServices.addEmployee(employee)
            .then((res) => {
                console.log(res.data);
                // setEmployeesList([...employeesList, ])
                this.props.addEmployee(res.data);
                this.notify("one employee is added successfully");
            })
            .catch((err) => {
                console.log(err);
                // console.log(err.response);
                let errMsgs = err.response.data.message;
                console.log(errMsgs);
                errMsgs = errMsgs.substring(errMsgs.indexOf(":")+1);
                console.log(errMsgs);
                errMsgs = errMsgs.trim();
                errMsgs = errMsgs.split(",");
                console.log(errMsgs);
                errMsgs.forEach(errMsg => {
                    if (errMsg.includes("emp_name")) {
                        errMsg = errMsg.split(":")[1];
                        this.setState({ emp_nameErr: errMsg });
                    }
                    if (errMsg.includes("email")) {
                        errMsg = errMsg.split(":")[1];
                        this.setState({ emailErr: errMsg });
                    }
                    if (errMsg.includes("job")) {
                        errMsg = errMsg.split(":")[1];
                        this.setState({ jobErr: errMsg });
                    }
                    if (errMsg.includes("salary")) {
                        errMsg = errMsg.split(":")[1];
                        this.setState({ salaryErr: errMsg });
                    }
                })

            })
        
        this.setState({
            emp_name: '',
            email: '',
            job: '',
            salary: '',

            emp_nameErr: "",
            emailErr: "",
            jobErr: "", 
            salaryErr: "",
        });
    }
    render() {
        console.log("from render of CreateEmployeeForm");
        let {
            emp_name, email, job, salary
        } = this.state;
        return(
            <div>
                <div className="col-md-6">
                    <h3>Create Employee Form</h3>
                    <form onSubmit={this.createEmployee}>
                        <div>
                            <label>EmployeeName: </label>
                            <input type="text" name="emp_name"
                                value={ emp_name}
                                className="form-control"
                                onChange={this.fieldChangeHandler}
                            ></input>
                            <div>
                                <p>{ this.state.emp_nameErr}</p>
                            </div>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="text" name="email"
                                value={email }
                                className="form-control"
                                onChange={this.fieldChangeHandler}
                            ></input>
                            <div>
                                <p>{ this.state.emailErr}</p>
                            </div>
                        </div>
                        <div>
                            <label>Job</label>
                            <input type="text" name="job"
                                value={job }
                                className="form-control"
                                onChange={this.fieldChangeHandler}
                            ></input>
                            <div>
                                <p>{ this.state.jobErr}</p>
                            </div>
                        </div>
                        <div>
                            <label>Salary:</label>
                            <input type="text" name="salary"
                                value={salary }
                                className="form-control"
                                onChange={this.fieldChangeHandler}
                            ></input>
                            <div>
                                <p>{ this.state.salaryErr}</p>
                            </div>
                        </div>
                        <div className="my-3 text-center">
                            <button className="btn btn-primary col-md-6">Create</button>
                        </div>
                    </form>
               </div>
            </div>
        )
    }
}

export default CreateEmployeeForm;