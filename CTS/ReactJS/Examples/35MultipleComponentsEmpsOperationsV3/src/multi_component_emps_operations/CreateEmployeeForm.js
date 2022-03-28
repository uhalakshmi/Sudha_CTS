import React from 'react';
class CreateEmployeeForm extends React.Component{
    constructor() {
        super();
        console.log("from constructor of CreateEmployeeForm");
        this.state = {
            empName: '',
            email: '',
            job: '',
            salary: ''
        }
    }
    fieldChangeHandler = (e) => {
        // console.log("from fieldChangeHandler of CreateEmployeeForm");
        this.setState({ [e.target.name]: e.target.value });
    }
    createEmployee = (e) => {
        console.log("from createEmployee of CreateEmployeeForm");
        e.preventDefault();
        let employee = this.state;
        console.log(employee);
        this.props.addEmployee(employee);
        this.setState({
            empName: '',
            email: '',
            job: '',
            salary: ''
        });
    }
    render() {
        console.log("from render of CreateEmployeeForm");
        let {
            empName, email, job, salary
        } = this.state;
        return(
            <div>
                <div className="col-md-6">
                    <h3>Create Employee Form</h3>
                    <form onSubmit={this.createEmployee}>
                        <div>
                            <label>EmployeeName: </label>
                            <input type="text" name="empName"
                                value={ empName}
                                className="form-control"
                                onChange={this.fieldChangeHandler}
                            ></input>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="text" name="email"
                                value={email }
                                className="form-control"
                                onChange={this.fieldChangeHandler}
                            ></input>
                        </div>
                        <div>
                            <label>Job</label>
                            <input type="text" name="job"
                                value={job }
                                className="form-control"
                                onChange={this.fieldChangeHandler}
                            ></input>
                        </div>
                        <div>
                            <label>Salary:</label>
                            <input type="text" name="salary"
                                value={salary }
                                className="form-control"
                                onChange={this.fieldChangeHandler}
                            ></input>
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