import React, { useState} from "react"

export default function LoginForm() {
    let [uid, setUid] = useState('');
    let [pwd, setPwd] = useState('');

    function doLogin(e) {
        e.preventDefault();
        console.log("I am from doLogin");
        console.log("uid: ", uid);
        console.log("pwd: ", pwd);
    }
    return (
        <div>
            <h3>Login Form</h3>
            <div>
                <form onSubmit={doLogin}>
                    <div>
                        <div>
                            <label>UserId</label>
                            <input type='text' className="form-control"
                                value={uid}
                                onChange={(e)=> setUid(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type='text' className="form-control"
                                value={pwd}
                                onChange={(e)=> setPwd(e.target.value)}
                            ></input>
                        </div>
                        <div className="my-3">
                            <button className="btn btn-primary col-md-2">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}