import Counter from '../../../lib/Counter/Counter.jsx';

import React from 'react';
import chai, { assert } from 'chai';
import { shallow } from 'enzyme';

import spies from 'chai-spies';

chai.use(spies);
const should = chai.should();

const increment = () => {};
const incrementSpy = chai.spy(increment);

const decrement = () => {};
const decrementSpy = chai.spy(decrement);

const props = {
    counter: 11,
    increment: incrementSpy,
    decrement: decrementSpy
};

describe('Counter enzyme', () => {
    it ('Renders counter', () => {
        const component = shallow(<Counter {...props}/>);

        assert.equal(component.find('.btn').length, 2);
        assert.equal(component.find('.counter').hasClass('_red'), true);
        assert.equal(component.find('.counter').text(), '11');

        component.find('#decrement').simulate('click');
        decrementSpy.should.have.been.called();

        component.find('#increment').simulate('click');
        incrementSpy.should.have.been.called();
    });
});