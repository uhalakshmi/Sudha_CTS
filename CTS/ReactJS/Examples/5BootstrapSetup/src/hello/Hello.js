import React from "react";
import './Hello.css'

class Hello extends React.Component{
    render() {
        return (
            <div>
                <h3 className ='text-primary'>
                    Hello World
                </h3>
            </div>
        )
    }
}

export default Hello;