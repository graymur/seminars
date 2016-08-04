import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    decrement() {
        this.setState({ count: this.state.count - 1 });
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        let className = ['counter'];

        if (this.state.count > 10) {
            className.push('_red');
        }

        return (
            <div className="container-fluid" style={{ paddingTop: '20px' }}>
                <button onClick={this.decrement.bind(this)} className="btn btn-default">-</button>
                <span className={className.join(' ')}>{this.state.count}</span>
                <button onClick={this.increment.bind(this)} className="btn btn-default">+</button>
            </div>
        );
    }
}
