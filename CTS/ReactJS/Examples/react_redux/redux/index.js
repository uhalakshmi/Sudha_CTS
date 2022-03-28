import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

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
const store = createStore(counterReducer);


ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
