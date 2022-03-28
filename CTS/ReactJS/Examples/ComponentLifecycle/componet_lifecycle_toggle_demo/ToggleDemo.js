import React from "react";
import Box from "./Box";
import './Box.css'

class ToggleDemo extends React.Component{
    constructor() {
        super();
        this.state = {
            toggleFlag: true,
        }
    }
    toggler = () => {
        let { toggleFlag } = this.state;
        toggleFlag = !toggleFlag;
        this.setState({toggleFlag})
    }
    componentDidUpdate() {
        console.log("from componentDidUpdate of ToggleDemo");
    }
    render() {
        let { toggleFlag } = this.state;
        console.log("from render of ToggleDemo");
        return (
            <div>
                <h3>Component Lifecycle methods demo using Toggle Example</h3>
                {toggleFlag &&
                    <Box></Box>
                }

                <div className="my-4">
                    <button onClick={this.toggler}
                        className="btn btn-secondary col-md-2"
                    >
                        {toggleFlag &&
                            "Hide"
                        }
                        {!toggleFlag &&
                            "Show"
                        }
                    </button>
                </div>
            </div>
        )
    }
}

export default ToggleDemo;