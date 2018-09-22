import React, { Component } from 'react';
import TodoItem from './todoItem.js';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        };
    }

    render() {
        console.log(this.props)
        return (
            this.state.items.map(function(item) {
                return <TodoItem text={item}></TodoItem>
            })
        );
    }
}