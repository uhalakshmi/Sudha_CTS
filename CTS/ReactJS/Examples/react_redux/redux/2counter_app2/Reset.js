import React from "react";
import { connect } from 'react-redux';

function Reset(props) {
    console.log("Props: ", props);
    return (
        <button onClick={() => props.dispatch({ type: 'reset' })}>Reset</button>
                                     
    )
}

const mapStateToProps = (state) => {
    return { state };
}
export default connect()(Reset);