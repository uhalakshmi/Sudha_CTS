function counterReducer(state = 0, action) {
    console.log(action);
    if (action.type === 'increment') {
        return state + 1;
    } else if (action.type === 'decrement')
        return state - 1;
    else if (action.type === 'reset')
        return 0;
    else
        return state;
}

export default counterReducer;