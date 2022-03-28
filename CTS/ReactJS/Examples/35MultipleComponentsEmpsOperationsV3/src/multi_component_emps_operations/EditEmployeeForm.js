import React from 'react';
class EditEmployeeForm extends React.Component{
    constructor() {
        super();
        console.log("from constructor of EditEmployeeForm");
        console.log("props: ", this.props);
        this.state = {
            empName: '',
            email: '',
            job: '',
            salary: ''
        }
    }
    componentDidMount() {
        console.log("from componentDidMount of EditEmployeeForm");
        console.log("props: ", this.props);
        let {
            empNo,
            empName,
            email,
            job,
            salary
        } = this.props.emp;
        this.setState({
            empNo,
            empName,
            email,
            job,
            salary
        });

        // lo
    }
    componentDidUpdate(prevProps) {
        console.log("from componentDidUpdate of EditEmployeeForm");
        console.log("props: ", this.props);
        let {
            empNo,
            empName,
            email,
            job,
            salary
        } = this.props.emp;
        if (prevProps.emp.empNo != this.props.emp.empNo) {
            this.setState({
                empNo,
                empName,
                email,
                job,
                salary
            });
        }
        
    }
    
    fieldChangeHandler = (e) => {
        // console.log("from fieldChangeHandler of EditEmployeeForm");
        this.setState({ [e.target.name]: e.target.value });
    }
    updateEmployee = (e) => {
        console.log("from updateEmployee of EditEmployeeForm");
        e.preventDefault();
        let employee = this.state;
        // console.log(employee);
        this.props.updateEmployee(employee, "create");
        this.setState({
            empNo: '',
            empName: '',
            email: '',
            job: '',
            salary: ''
        });
        // this.props.updateEmployee();
    }
    render() {
        console.log("from render of EditEmployeeForm");
        let {
            empNo, empName, email, job, salary
        } = this.state;
        return(
            <div>
                <div className="col-md-6">
                    <h3>Edit Employee Form</h3>
                    <form onSubmit={this.updateEmployee}>
                        <div>
                            <label>EmployeeNumber: </label>
                            <input type="text" name="empNo"
                                value={ empNo}
                                className="form-control"
                                // onChange={this.fieldChangeHandler}
                                readOnly
                            ></input>
                        </div>
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
                            <button className="btn btn-primary col-md-6">Update</button>
                        </div>
                    </form>
               </div>
            </div>
        )
    }
}

export default EditEmployeeForm;