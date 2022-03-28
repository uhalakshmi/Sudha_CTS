import React, {useState, useEffect} from 'react';

function EditEmployeeForm(props) {
    let [id, setId] = useState('');
    let [emp_name, setEmpName] = useState('');
    let [email, setEmail] = useState('');
    let [job, setJob] = useState('');
    let [salary, setSalary] = useState('');
     
    useEffect(() => {
        console.log("props: ", props);
        let {
            id,
            emp_name,
            email,
            job,
            salary
        } = props.emp;
        setId(id);
        setEmpName(emp_name);
        setEmail(email);
        setJob(job);
        setSalary(salary);
        
    }, [props])
    
    const updateEmployee = (e) => {
        console.log("from updateEmployee of EditEmployeeForm");
        e.preventDefault();
        let employee = {id, emp_name, job, email, salary}
        // console.log(employee);
        props.updateEmployee(employee, "create");
        setId('');
        setEmpName('');
        setEmail('');
        setJob('');
        setSalary('');
    }
        
    return(
        <div>
            <div className="col-md-6">
                <h3>Edit Employee Form</h3>
                <form onSubmit={updateEmployee}>
                    <div>
                        <label>EmployeeNumber: </label>
                        <input type="text" name="id"
                            value={id}
                            className="form-control"
                            readOnly
                        ></input>
                    </div>
                    <div>
                        <label>EmployeeName: </label>
                        <input type="text" name="emp_name"
                            value={ emp_name}
                            className="form-control"
                            onChange={(e)=>setEmpName(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email"
                            value={email }
                            className="form-control"
                            onChange={(e)=>setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>Job</label>
                        <input type="text" name="job"
                            value={job }
                            className="form-control"
                            onChange={(e)=>setJob(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>Salary:</label>
                        <input type="text" name="salary"
                            value={salary }
                            className="form-control"
                            onChange={(e)=>setSalary(e.target.value)}
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

export default EditEmployeeForm;