import { createStore } from "redux";

function todoAppReducer(state=[], action) {
    console.log("action:", action);

    if (action.type === 'add_task') {
        return [...state, action.task];
    } else if (action.type === 'delete_task') {
        return state.filter((task, ind) => ind != action.remove_index);
    } else
        return state;
}

const store = createStore(todoAppReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'add_task', task: 'task 1' });
store.dispatch({ type: 'add_task', task: 'task 2' });
store.dispatch({ type: 'add_task', task: 'task 3' });
store.dispatch({ type: 'add_task', task: 'task 4' });
store.dispatch({ type: 'delete_task', remove_index: 3 });
store.dispatch({ type: 'delete_task', remove_index: 1 });

// addTask();=>add_task
// removeTask();=>delete_task