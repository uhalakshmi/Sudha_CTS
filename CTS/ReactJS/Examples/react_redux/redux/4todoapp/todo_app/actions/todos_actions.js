

const mapDispatchToProps = (dispatch) => {
    return {
        addTask:    (task) => dispatch({type: 'add_task', task}),
        deleteTask: (remove_index) => dispatch({type: 'delete_task', remove_index}),
    }
}

export default mapDispatchToProps;
