import React from "react";
import { connect } from 'react-redux';
function Decrement(props) {
    console.log("props: ", props);
    return (
        <button onClick={()=>props.dispatch({type:'decrement'})}>Decrement</button>
    )
}

const mapStateToProps = (state) => {
    return { state };
}
export default connect(mapStateToProps)(Decrement);