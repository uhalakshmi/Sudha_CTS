import { createStore } from "redux";
import todoAppReducer from "../reducers/todos_reducer";

const store = createStore(todoAppReducer);

export default store;
