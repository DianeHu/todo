class todoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
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
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.done}
                        onChange={this.toggleDone()} />
                </form>
            </div>
        );
    }
}