import React from "react";

function Person() {
    var first_name = 'Anil'
    var last_name = "Ambani"
    return (
        <div className="container">
            <h3>First Name: {first_name}</h3>
            <h3>Last Name: {last_name}</h3>
        </div>
    )
}

export default Person;