import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/todoList';
import ItemInput from './Components/itemInput';

var items = ["one", "two", "three"];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items
        };
    }

    addToItems(item) {
        this.setState({items: this.state.items.concat(item)});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">To do list</h1>
                </header>
                <ItemInput addToItems={this.addToItems.bind(this)}></ItemInput>
                <div className="App-intro">
                    <TodoList items={this.state.items}></TodoList>
                </div>
            </div>
        );
    }
}

export default App;
