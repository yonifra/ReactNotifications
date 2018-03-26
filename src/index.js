import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
    todos: [
        {id: 1, name: 'List header 1', isChecked: true},
        {id: 2, name: 'List header 2', isChecked: false},
        {id: 3, name: 'List header 3', isChecked: true}
    ]
}
ReactDOM.render(<App todos={state.todos} />, document.getElementById('root'));
registerServiceWorker();
