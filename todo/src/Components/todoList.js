import React, { Component } from 'react';
import TodoItem from './todoItem.js';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return <div></div>
        // return (
        //     <div>
        //         {this.props.items.map(function(item) {
        //             return <TodoItem {...this.props}></TodoItem>
        //         })}
        //         <button onClick={this.props.delete.bind(this)}>Delete</button>
        //     </div>
        // );
    }
}