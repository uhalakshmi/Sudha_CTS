import React from "react";

function Person(props) {
    return (
        <div className="card p-3">
            <h3>First Name: {props.per_info.first_name}</h3>
            <h3>Last Name: {props.per_info.last_name}</h3>
            <h3>Email: {props.per_info.email}</h3>
            <h3>Age: {props.per_info.age}</h3>
            <h3>Profession: {props.per_info.profission}</h3>
        </div>
    )
}

export default Person;