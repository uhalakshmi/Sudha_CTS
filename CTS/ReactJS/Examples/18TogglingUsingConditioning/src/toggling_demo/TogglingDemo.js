import React from "react";
import './TogglingDemo.css'


class TogglingDemo extends React.Component{
    constructor() {
        super();
        this.state = {
            toggleFlag: true
        }
    }

    toggler=() =>{
        // alert("Hi");
        let { toggleFlag } = this.state;
        toggleFlag = !toggleFlag;
        this.setState({toggleFlag})
    }

    render() {
        return (
            <div>
                {this.state.toggleFlag == true &&
                    
                    <div className="box"></div>
                }
                
                <div className="mt-5">
                    <button onClick={this.toggler} className="col-md-4">
                        {this.state.toggleFlag && "Hide"}
                        {!this.state.toggleFlag && "Show"}
                    </button>
                </div>
                
            </div>
        )
    }
}

export default TogglingDemo;