import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './reducer.js';

@connect(
    state => ({ counter: state.counter }),
    { increment, decrement }
)
class Counter extends React.Component {
    render() {
        let className = ['counter'];
        const counter = this.props.counter;

        if (counter > 10) {
            className.push('_red');
        }

        return (
            <div className="container-fluid" style={{ paddingTop: '20px' }}>
                <button onClick={this.props.decrement} className="btn btn-default" id="decrement">-</button>
                <span className={className.join(' ')}>{counter}</span>
                <button onClick={this.props.increment} className="btn btn-default" id="increment">+</button>
            </div>
        );
    }
}

export default Counter;