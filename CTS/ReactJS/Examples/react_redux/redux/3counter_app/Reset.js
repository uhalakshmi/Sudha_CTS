import React from "react";
import { connect } from 'react-redux';
import mapDispatchToProps from './actions/counter_action';
import mapStateToProps from './state/counter_state';

function Reset(props) {
    console.log("Props: ", props);
    return (
        <button onClick={props.reset}>Reset</button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);