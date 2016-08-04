import React from 'react';
import store from '../../redux/store.js';

export default class Counter extends React.Component {
    decrement() {
        this.props.store.dispatch({ type: 'DECREMENT_COUNTER' });
    }

    increment() {
        this.props.store.dispatch({ type: 'INCREMENT_COUNTER' });
    }

    render() {
        let className = ['counter'];
        const counter = this.props.store.getState().counter;

        if (counter > 10) {
            className.push('_red');
        }

        return (
            <div className="container-fluid" style={{ paddingTop: '20px' }}>
                <button onClick={this.decrement.bind(this)} className="btn btn-default">-</button>
                <span className={className.join(' ')}>{this.props.store.getState().counter}</span>
                <button onClick={this.increment.bind(this)} className="btn btn-default">+</button>
            </div>
        );
    }
}
