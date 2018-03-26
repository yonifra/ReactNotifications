import React, { Component } from 'react';
import {Button} from './components/Button.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Todo-List">
          <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" defaultChecked={todo.isChecked}/> {todo.name}
            </li>
          ))}
          </ul>
        </div>

        <div>
          <Button text="Show notification" />
        </div>
      </div>
    );
  }
}

export default App;
