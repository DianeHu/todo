import React, { Component } from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todoItem">
                <div className={"todoItem-text"}>{this.props.item.name}</div>
                <input
                className="todoItem-checkbox squaredFour"
                name="Completed"
                type="checkbox"
                defaultChecked={this.props.item.done}
                onChange={this.props.toggle.bind(this)} />
            </div>
        );
    }
}
