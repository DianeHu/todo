import React, { Component } from 'react';

export default class ItemInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: ''
        };
    }

    handleChange(event) {
        this.setState({newItem: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addToItems(this.state.newItem);
        this.setState({newItem: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    New item:
                    <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
