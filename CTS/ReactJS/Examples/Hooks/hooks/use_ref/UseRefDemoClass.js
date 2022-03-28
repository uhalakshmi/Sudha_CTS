import React from "react"
import './Box.css'

export default class UseRefDemoClass extends React.Component {
    constructor() {
        super();
        this.boxRef = React.createRef();
    }
    
    changeColor(myColor){
        this.boxRef.current.style.backgroundColor = myColor;
    }
    render() {
        return (
            <div>
                <div className="box" ref={this.boxRef} id="box"></div>
            
                <div className="text-center mt-4">
                    <button onClick={() => this.boxRef.current.style.backgroundColor='red'} className="btn btn-danger btn-lg">Red</button>
                    <button onClick={() => this.changeColor('green')} className="btn btn-success btn-lg">Green</button>
                    <button onClick={() => this.changeColor('blue')} className="btn btn-primary btn-lg">Blue</button>
                </div>
            </div>
        )
    }
}