import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/todoList';

const items = ["one", "two", "three"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To do list</h1>
        </header>
        <div className="App-intro">
          <TodoList items={items}></TodoList>
        </div>
      </div>
    );
  }
}

export default App;
