import React from "react";

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
                                onChange={this.changeHandler}></input>
                        </div>
                        <div className="my-3">
                            <input type="text" name="assoId"
                                value={assoId} placeholder="Associate Id"
                                className="form-control"
                                onChange={this.changeHandler}></input>
                        </div>
                        <div className="my-3">
                            <input type="text" name="projectId"
                                value={projectId} placeholder="Project Id"
                                className="form-control"
                                onChange={this.changeHandler}></input>
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
                                                    //  checked

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