import React, { useState } from "react"
import { connect } from 'react-redux';
import mapStateToProps from './state/counter_state';

function Component6(props) {
    console.log("props:", props);
    return (
        <div className="text-center">
            <h3>Component-6</h3>
            <h3>Current Count = {props.state}</h3>
        </div>
    )
}

export default connect(mapStateToProps)(Component6)


