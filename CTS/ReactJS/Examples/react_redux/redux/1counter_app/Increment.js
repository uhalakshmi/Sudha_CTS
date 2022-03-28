import React from "react";
import { connect } from 'react-redux';
function Increment(props) {
    console.log("props: ", props);
    return (
        <button onClick={ props.incrememnt}>Increment</button>
    )
}

const mapStateToProps = (state) => {
    return { state };
}
const mapDispathcToProps = (dispatch)=>{
    return {
        incrememnt:()=>dispatch({type:'increment'})
    };
}

// incrememnt = () => dispatch({ type: 'incrememnt' })
// store.dispatch({type:'incrememnt'})
export default connect(mapStateToProps, mapDispathcToProps)(Increment)