import Counter from '../../../lib/Counter/Counter.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import { assert } from 'chai';
import $ from 'jquery';

describe('Counter', () => {
    it ('Renders counter', () => {
        const component = ReactTestUtils.renderIntoDocument(<div><Counter counter={11}/></div>);
        const el = $(ReactDOM.findDOMNode(component));
        const counterElement = el.find('.counter');

        assert.equal(counterElement.text(), '11');
        assert.equal(counterElement.hasClass('_red'), true);
    });
});
