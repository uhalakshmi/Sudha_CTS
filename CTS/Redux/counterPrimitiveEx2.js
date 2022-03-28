import { createStore } from "redux";

function counterReducer(state=0, action) {
    console.log(action);
    if (action.type === "increment" && !action.step)
        return state + 1;
    else if (action.type === 'increment' && action.step)
        return state + action.step;
    else if (action.type === "decrement" && !action.step)
        return state - 1;
    else if (action.type === 'decrement' && action.step)
        return state - action.step;
    else if (action.type === 'reset') {
        return 0;
    } else
        return state;
}

const store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));


store.dispatch({ type: 'increment' });//1
store.dispatch({ type: 'increment', step: 5 });//6
store.dispatch({ type: 'increment' });//7
store.dispatch({ type: 'increment' });//8
store.dispatch({ type: 'increment', step: 10 });//18
store.dispatch({ type: 'decrement' });//17
store.dispatch({ type: 'decrement', step: 2 });//15
store.dispatch({ type: 'reset' });//0
store.dispatch({ type: 'increment', step: 10 });//10