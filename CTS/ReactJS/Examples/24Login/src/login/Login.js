import React from "react";

class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            userId: '',
            pwd: '',
        }
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(event) {
        // console.log(event.target.value);
        // console.log(event.target.name);
        this.setState({[event.target.name]: event.target.value})
    }
    loginHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h3>Login </h3>
                <div className="col-md-6">
                    <form onSubmit={this.loginHandler }>
                        <div>
                            <label>UserId</label>
                            <input type="text" className="form-control"
                                name="userId"
                                value={this.state.userId } onChange={this.changeHandler }
                                ></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" className="form-control"
                                autoComplete="off"
                                name="pwd"
                                value={this.state.pwd } onChange={this.changeHandler }
                            ></input>
                        </div>
                        <div className="my-3"> 
                            <button className="btn btn-primary col-md-6">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
        
}

export default Login;