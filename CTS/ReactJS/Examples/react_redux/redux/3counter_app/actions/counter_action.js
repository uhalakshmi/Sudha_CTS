
const mapDispatchToProps = (dispatch)=>{
    return {
        incrememnt: () => dispatch({ type: 'increment' }),
        decrement:  () => dispatch({ type: 'decrement' }),
        reset:      () => dispatch({ type: 'reset' }),
    };
}

export default mapDispatchToProps;


