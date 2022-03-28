import { createStore } from 'redux';
import counterReducer from '../reducers/counter_reducer'

const store = createStore(counterReducer);

export default store;