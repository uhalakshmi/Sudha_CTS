import { createStore } from "redux";

function counterReducer(state = { counter: 0 }, action) {
    console.log("action:", action);
    if (action.type == 'increment') {
        return { counter: state.counter + 1 };
    } else if (action.type == 'decrement') {
        return { counter: state.counter - 1 };
    } else if (action.type === 'reset') {
        return { counter: 0 };
    } else
        return state;
    
}

const store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });