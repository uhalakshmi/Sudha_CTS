function todoAppReducer(state = { todosList: [] }, action) {
    console.log("action:", action);

    if (action.type === 'add_task') {
        return { todosList: [...state.todosList, action.task] };
    } else if (action.type === 'delete_task') {
        return { todosList: state.todosList.filter((task, ind) => ind != action.remove_index) }
    } else
        return state;
}

export default todoAppReducer;