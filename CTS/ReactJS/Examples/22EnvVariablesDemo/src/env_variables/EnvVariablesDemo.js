import React from "react";
function EnvVariablesDemo() {
    return (
        <div>
            <h3>{process.env.NODE_ENV}</h3>
            <h3>{process.env.PATH}</h3>
        </div>
    )
}

export default EnvVariablesDemo;