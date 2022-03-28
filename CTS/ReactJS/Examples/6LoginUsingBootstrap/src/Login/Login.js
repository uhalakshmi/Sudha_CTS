import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className='container'>
            <div className="col-md-6">
                <h3 className="text-center">Login</h3>
                <div>
                    <label>UserId:</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" className="form-control"></input>
                </div>
                <div className="mt-3 text-center">
                    <button className="btn btn-primary col-md-6">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;