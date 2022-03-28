import React from "react";
import { connect } from 'react-redux';
import mapDispatchToProps from './actions/counter_action';
import mapStateToProps from './state/counter_state';

function Increment(props) {
    console.log("props: ", props);
    return (
        <button onClick={ props.incrememnt}>Increment</button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Increment)