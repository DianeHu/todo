import React, { Component } from 'react';
import TodoItem from './todoItem.js';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {this.props.items.map((item) =>
                    <TodoItem key={item.name} item={item} deleteSelf={this.props.deleteSelf}></TodoItem>
                )}
            </div>
        );
    }
}
