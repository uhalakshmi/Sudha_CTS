import React from "react"


class SgtateDemo extends React.Component{

    constructor() {
        super()
        this.state = {
            first_name: "Anil",
            last_name: "Ambani"
        }
    }

    render() {
        return (
            <div>
                <h3>Frist Name: {this.state.first_name}</h3>
                <h3>Last Name: {this.state.last_name}</h3>
            </div>
        )
        
    }
}

export default SgtateDemo