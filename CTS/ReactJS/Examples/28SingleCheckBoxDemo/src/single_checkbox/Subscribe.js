import React from "react";


class Subscribe extends React.Component{
    constructor() {
        super();
        this.state = {
            subscribe:false
        }
    }
    subscribeChangeHandler = (event) => {
        console.log(event.target.checked);
        this.setState({[event.target.name]: event.target.checked})
    }
    showSate = () => {
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h3>Demo on Single Checkbox control</h3>
                <div>
                    <input type="checkbox" name="subscribe"
                        value="subscribe"
                        // checked={ this.state.subscribe}
                        onChange={this.subscribeChangeHandler}
                    >
                    </input>
                    <label> Subscribe</label>
                </div>
                {this.state.subscribe &&
                    <h3>User Scbscribed</h3>
                }
                {!this.state.subscribe &&
                    <h3>User Not Scbscribed</h3>
                }
                <div>
                    <button onClick={this.showSate}>Show State</button>
                </div>
            </div>
        )
    }
}

export default Subscribe;