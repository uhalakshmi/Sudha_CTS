

var state = 10;

function myReducer(state, action){
    if (action == 'increment')
    state = state + 1;
    else if (action === 'decrement') {
        state = state - 1;
    }
    console.log("Inside of reducer, state:", state);
    return state;
}
state = myReducer(state,'increment');
console.log("counter: ", state);
state = myReducer(state, 'increment');
console.log("counter: ", state);