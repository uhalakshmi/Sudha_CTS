import React from "react";

class Registration extends React.Component{
    constructor() {
        super();
        this.state = {
            assoName: "",
            assoId: "",
            projectId: "",
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
                        <div>
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