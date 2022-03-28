import React from "react";


class Box extends React.Component{
    constructor() {
        super();
        console.log("from constructor of Box");
    }
    componentDidMount() {
        console.log("from componentDidMount of Box");
    }
    componentDidUpdate() {
        console.log("from componentDidUpdate of Box");
    }
    componentWillUnmount() {
        console.log("from componentWillUnmount of Box");
    }
    render() {
        console.log("from render of Box");
        return (
            <div className="box">

            </div>
        )
    }
}

export default Box;