import React from 'react'
import { connect } from 'react-redux';

function Display(props) {
    console.log('props:', props);
    return (
        <h3>Counter: { props.state}</h3>
    )
}

const mapStateToProps = (state) => {
    return { state };
}

export default connect(mapStateToProps)(Display);