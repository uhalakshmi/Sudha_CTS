import React from "react";
import './Registration.css'
class Registration extends React.Component{
    constructor() {
        super();
        this.state = {
            assoName: "",
            assoId: "",
            projectId: "",
            locationType: "",
            offshore: ['Chennai', 'Bangalore', 'Hyderabad', 'Pune', 'Kochi'],
            onshore: ['US', 'Non US'],
            skills: ['HTML5,CSS3,JS', 'Angular 8', 'Express JS', 'SASS', 'React JS',
                'Node JS', 'ES5,ES6,ES7...', 'Vue JS', 'Mango DB', 'Bootstrap 4',
                'TypeScript',
            ],
            selectedSkills: [],
            location:'',
            profileImg: '',
            comments: "",


            // Error Messages 
            assoNameErrMsg: '',
            assoIdErrMsg: "",
	
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    profileChangeHandler = (e) => {
        if (e.target.files.length === 0) {
            return;
        }
        let profileImg = e.target.files[0];
        this.setState({ profileImg })
    }
    
    skillsChangeHandler = (e) => {
        // console.log("Name: ", e.target.name);
        // console.log("Value: ", e.target.value);
        // console.log("Checked: ", e.target.checked);

        let { selectedSkills } = this.state;
        if (e.target.checked) {
            selectedSkills.push(e.target.value);
        } else if (!e.target.checked) {
            let ind = selectedSkills.indexOf(e.target.value);
            selectedSkills.splice(ind, 1);
        }
        
        console.log(selectedSkills);
        this.setState({selectedSkills})
    }
    validations = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);

        if (e.target.name === 'assoName') {
            let assoName = e.target.value;
            let assoNameErrMsg = '';
            if (assoName == undefined || assoName.length === 0) {
                assoNameErrMsg = "Please enter the Associate Name."
                this.setState({ assoNameErrMsg })
                e.target.classList.add("field-error")
            } else {
                // let nameReg = /[a-zA-Z]{5, 30}/
                // let nameReg = /^((?![A-Z ]+$)(?![a-z ]+$)[a-zA-Z ]+){5, 30}$/
                let nameReg = /^([a-zA-Z ]{5,10})$/
                console.log(assoName);
                console.log(nameReg);
                console.log(nameReg.test(assoName));
                if (!nameReg.test(assoName)) {
                    let assoNameErrMsg = "Accepts Alphabets, space & Min 5 to Max 30 Char"
                    this.setState({ assoNameErrMsg })
                    e.target.classList.add("field-error")
                } else {
                    assoNameErrMsg = ''
                    e.target.classList.remove("field-error")
                    this.setState({ assoNameErrMsg })
                }
            }
        }
        if (e.target.name === 'assoId') {
            let assoId = e.target.value;
            if (assoId == undefined || assoId.length === 0) {
                let assoIdErrMsg = "Please enter the Associate id."
                this.setState({ assoIdErrMsg })
                e.target.classList.add("field-error")
            }else {
                let assoIdErrMsg = ""
                this.setState({ assoIdErrMsg })
                e.target.classList.remove("field-error")
            }
        } 
            
    }
    render() {
        let {
            assoName, assoId, projectId, comments,
        } = this.state;
        return (
            <div>
                <h3>Registration From </h3>
                <div>
                    <form onSubmit={ this.submitHandler}>
                        <div className="my-3">
                            <input type="text" name="assoName"
                                value={assoName} placeholder="Associate Name"
                                className="form-control"
                                onChange={this.changeHandler}
                                onBlur={this.validations }
                            ></input>
                            <div>
                                <p className="text-danger">{ this.state.assoNameErrMsg}</p>
                            </div>
                        </div>
                        <div className="my-3">
                            <input type="text" name="assoId"
                                value={assoId} placeholder="Associate Id"
                                className="form-control"
                                onChange={this.changeHandler}
                                onBlur={this.validations }
                            ></input>
                            <div>
                                <p className="text-danger">{ this.state.assoIdErrMsg}</p>
                            </div>
                            
                        </div>
                        <div className="my-3">
                            <input type="text" name="projectId"
                                value={projectId} placeholder="Project Id"
                                className="form-control"
                                onChange={this.changeHandler}
                                onBlur={this.validations }
                            ></input>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <input type="radio" name="locationType"
                                    value="Offshore"
                                    onChange={this.changeHandler}
                                ></input>
                                <label className="mx-2">Offshore</label>
                            </div>
                            <div className="col-md-2">
                                <input type="radio" name="locationType"
                                        value="Onshore"
                                        onChange={this.changeHandler}
                                    ></input>
                                <label className="mx-2">Onshore</label>
                            </div>
                        </div>
                        <div className="my-3">
                            <select name="location"
                                onChange={this.changeHandler}
                                className="form-select"
                            >
                                <option>Select Location</option>
                                {this.state.locationType === 'Offshore' &&
                                    this.state.offshore.map((location, ind) => {
                                        return <option value={location } key={ind }>{ location}</option>
                                    })
                                }
                                {this.state.locationType === 'Onshore' &&
                                    this.state.onshore.map((location, ind) => {
                                        return <option value={location } key={ind }>{ location}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="row">
                            {
                                this.state.skills.map((skill, ind) => {
                                    return <div className="col-md-4" key={ind}>
                                        <input type="checkbox" name="skills"
                                                    value={skill }
                                                    checked={ this.state.selectedSkills.includes(skill)}
                                                    className="form-check-input"
                                                    onChange={this.skillsChangeHandler}
                                                ></input>
                                                <label className="form-check-label mx-2">{skill}</label>
                                            </div>
                                
                                })
                            }
                        </div>
                        <div className="my-3 col-md-6">
                            <label>Upload Profile</label>
                            <input type="file" name=""
                                className="form-control"
                                onChange={ this.profileChangeHandler}></input>
                        </div>
                        <div className="my-3">
                            <textarea name="comments"
                                value={comments} placeholder="Comments"
                                className="form-control"
                                onChange={this.changeHandler}></textarea>
                        </div>
                        <div className="my-2">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Registration;