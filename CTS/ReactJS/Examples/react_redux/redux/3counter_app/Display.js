import React from 'react'
import { connect } from 'react-redux';
import mapStateToProps from './state/counter_state';

function Display(props) {
    console.log('props:', props);
    return (
        <h3>Counter: {props.state}</h3>
    )
}


export default connect(mapStateToProps)(Display);