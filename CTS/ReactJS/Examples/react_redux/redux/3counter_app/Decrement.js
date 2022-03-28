import React from "react";
import { connect } from 'react-redux';
import mapDispatchToProps from './actions/counter_action';
import mapStateToProps from './state/counter_state';

function Decrement(props) {
    console.log("props: ", props);
    return (
        <button onClick={props.decrement}>Decrement</button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Decrement);