import Counter from '../../../lib/Counter/Counter.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);
const should = chai.should();

const incrementHandler = () => {};
const incrementHandlerSpy = chai.spy(incrementHandler);

const decrementHandler = () => {};
const decrementHandlerSpy = chai.spy(decrementHandler);

const props = {
    counter: 11,
    increment: incrementHandlerSpy,
    decrement: decrementHandlerSpy
};

describe('Counter', () => {
    it ('Calls events handlers', () => {
        const component = ReactTestUtils.renderIntoDocument(<div><Counter {...props}/></div>);
        const el = $(ReactDOM.findDOMNode(component));

        ReactTestUtils.Simulate.click(el.find('#decrement').get(0));
        ReactTestUtils.Simulate.click(el.find('#increment').get(0));

        incrementHandlerSpy.should.have.been.called();
        decrementHandlerSpy.should.have.been.called();
    });
});
