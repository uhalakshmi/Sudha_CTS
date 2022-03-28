import React from "react";

function Person(props) {
    return (
        <div className="card p-3">
            <h3>First Name: {props.first_name}</h3>
            <h3>Last Name: {props.last_name}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Profession: {props.profission}</h3>
        </div>
    )
}

export default Person;