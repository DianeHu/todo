import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/todoList';
import ItemInput from './Components/itemInput';

var items = [
  {name: 'Make React Tutorial'},
  {name: 'Apply to HackDuke'},
  {name: 'Get Good Egg'}
]

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items
        };
    }

    addToItems(item) {
        this.setState({items: this.state.items.concat({name: item, done: false})});
    }

    deleteSelf = (name) => {
      if (!name) { return }
      this.setState({items: this.state.items.filter((i) => name != i.name)})
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">To do list</h1>
                </header>
                <ItemInput addToItems={this.addToItems.bind(this)}/>
                <TodoList deleteSelf={this.deleteSelf.bind(this)} items={this.state.items}/>
            </div>
        );
    }
}

export default App;
