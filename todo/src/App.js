import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/todoList';
import ItemInput from './Components/itemInput';

var items = [
    {name: 'one',
    done: false},
    {name: 'two',
    done: false},
    {name: 'three',
    done: false}]

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

    toggleDone(item) {
        var foundTodo = null;
        for(var i = 0; i < this.state.items.length; i++) {
            if(item.name === this.state.items[i].name) {
                foundTodo = item;
            }
        }
        foundTodo.done = !foundTodo.done;
        this.setState({ items: this.state.items });
    }

    deleteFromItems() {
        var collect = [];
        for(var i = 0; i < this.state.items.length; i++) {
            if(this.state.items[i].done === true) {
                collect.add(this.state.items[i]);
            }
        }
        for(var i = 0; i < collect.length; i++) {
            var dex = this.state.items.indexOf(collect[i]);
            this.setState({items: this.state.items.splice(dex, 1)});
        }
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
                    <TodoList toggle={this.toggleDone.bind(this)} delete={this.deleteFromItems.bind(this)} items={this.state.items}></TodoList>
                </div>
            </div>
        );
    }
}

export default App;
