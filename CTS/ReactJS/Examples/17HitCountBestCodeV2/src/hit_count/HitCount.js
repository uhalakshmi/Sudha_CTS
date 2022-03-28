import React from "react";


class HitCount extends React.Component{
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        // alert("Hello");
        // this.state.count++;
        // let count = this.state.count;
        let { count } = this.state;
        count++;
        // this.setState({ count: count }, () => console.log(this.state.count, count))
        this.setState({count}, ()=>console.log(this.state.count, count))
        // console.log(this.state.count, count);
    }
    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.clickHandler}>ClickMe</button>
            </div>)
        
    }
}

export default HitCount;