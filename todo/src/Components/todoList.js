import React, { Component } from 'react';
import TodoItem from './todoItem.js';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            this.props.items.map(function(item) {
                return <TodoItem text={item}></TodoItem>
            })
        );
    }
}