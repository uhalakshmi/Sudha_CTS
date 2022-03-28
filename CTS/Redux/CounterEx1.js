import { createStore } from 'redux';

function myReducer(state = 0, action) {
    console.log("action.type: ", action.type);
    if (action.type == 'increment' && !action.incrementBy)
        return state + 1;
    if (action.type == 'increment' && action.incrementBy)
    return state + action.incrementBy;
    else if (action.type === 'decrement')
        return state - 1;
    else
        return state;
}

const myStore = createStore(myReducer);

console.log("Current state: ", myStore.getState());
myStore.dispatch({ type: "increment" })
console.log("Current state: ", myStore.getState());
myStore.dispatch({ type: "increment", incrementBy: 10 })
console.log("Current state: ", myStore.getState());
myStore.dispatch({ type: "increment" })
console.log("Current state: ", myStore.getState());
myStore.dispatch({ type: "increment" })
console.log("Current state: ", myStore.getState());
myStore.dispatch({ type: "increment" })
console.log("Current state: ", myStore.getState());
myStore.dispatch({ type: "decrement" })
console.log("Current state: ", myStore.getState());
