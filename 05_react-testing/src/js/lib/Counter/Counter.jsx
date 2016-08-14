import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incrementAction, decrementAction } from './actions.js';

export class Counter extends React.Component {
    render() {
        let className = ['counter'];
        const counter = this.props.counter;

        if (counter > 10) {
            className.push('_red');
        }

        return (
            <div className="container-fluid" style={{ paddingTop: '20px' }}>
                <button onClick={this.props.decrementAction} className="btn btn-default" id="decrement">-</button>
                <span className={className.join(' ')}>{counter}</span>
                <button onClick={this.props.incrementAction} className="btn btn-default" id="increment">+</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({ counter: state.counter });
//const mapDispatchToProps = dispatch => bindActionCreators({ incrementAction, decrementAction }, dispatch);
const mapDispatchToProps = { incrementAction, decrementAction };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);