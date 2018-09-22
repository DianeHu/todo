import React, { Component } from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            text: props.text
        };
    }

    toggleDone() {
        this.state.done = !this.state.done;
    }

    render() {
        return (
            <div className="todoItem">
                <div className={"todoItem-text"}>{this.state.text}</div>
                <input
                className="todoItem-checkbox squaredFour"
                name="Completed"
                type="checkbox"
                defaultChecked={this.state.done}
                onChange={this.toggleDone()} />
            </div>
        );
    }
}
