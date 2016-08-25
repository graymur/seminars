import TodoList from '../../../lib/Todo/TodoList.jsx';
import { initialState } from '../../../lib/Todo/reducer.js';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import { assert } from 'chai';
import $ from 'jquery';

const props = { todos: initialState.items, loading: false };

describe('Todos', () => {
    it ('Renders todos', () => {
        const component = ReactTestUtils.renderIntoDocument(<div><TodoList {...props}/></div>);
        const el = $(ReactDOM.findDOMNode(component));

        assert.equal(el.find('.todos__item').length, 3);
        assert.equal(el.find('.todos__form').length, 1);
    });
});