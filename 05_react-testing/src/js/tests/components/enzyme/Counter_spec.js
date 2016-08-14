import { Counter } from '../../../lib/Counter/Counter.jsx';

import React from 'react';
import chai, { assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import spies from 'chai-spies';

chai.use(spies);
const should = chai.should();

const incrementHandler = () => {};
const incrementHandlerSpy = chai.spy(incrementHandler);

const decrementHandler = () => {};
const decrementHandlerSpy = chai.spy(decrementHandler);

const props = {
    counter: 11,
    incrementAction: incrementHandlerSpy,
    decrementAction: decrementHandlerSpy
};

describe('Counter enzyme', () => {
    it ('Renders counter', () => {
        const component = shallow(<Counter {...props}/>);

        assert.equal(component.find('.btn').length, 2);
        assert.equal(component.find('.counter').hasClass('_red'), true);
        assert.equal(component.find('.counter').text(), '11');

        component.find('#decrement').simulate('click');
        decrementHandlerSpy.should.have.been.called();

        component.find('#increment').simulate('click');
        incrementHandlerSpy.should.have.been.called();
    });
});
