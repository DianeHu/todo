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
            <div>
                <p>{this.state.text}</p>
                <form>
                    <input
                    name="Completed"
                    type="checkbox"
                    checked={this.state.done}
                    onChange={this.toggleDone()} />
                </form>
            </div>
        );
    }
}