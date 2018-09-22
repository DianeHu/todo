import React, { Component } from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    delete = () => {
      this.props.deleteSelf(this.props.item.name)
    }

    render() {
        return (
            <div className="todoItem">
                <button onClick={this.delete}>X</button>
                <div className={"todoItem-text"}>{this.props.item.name}</div>
                <input className="todoItem-checkbox squaredFour" name="Completed" type="checkbox" defaultChecked={this.props.item.done}/>
            </div>
        );
    }
}
