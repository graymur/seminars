import { TodoList } from '../../../lib/Todo/TodoList.jsx';
import { initialState } from '../../../lib/Todo/reducer.js';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);
const should = chai.should();

const toggleTodoAction = () => {};
const toggleTodoActionSpy = chai.spy(toggleTodoAction);

const addTodoAction = () => {};
const addTodoActionSpy = chai.spy(addTodoAction);

const props = {
    todos: initialState,
    toggleTodoAction: toggleTodoActionSpy,
    addTodoAction: addTodoActionSpy
};

describe('Todos', () => {
    it ('Toggles todo', () => {
        const component = ReactTestUtils.renderIntoDocument(<div><TodoList {...props}/></div>);
        const el = $(ReactDOM.findDOMNode(component));

        ReactTestUtils.Simulate.click(el.find('.todos__item').get(0));

        toggleTodoActionSpy.should.have.been.called.with({ id: 2, title: 'Выучить Редукс', completed: false });
    });

    it ('Adds todo', () => {
        const component = ReactTestUtils.renderIntoDocument(<div><TodoList {...props}/></div>);
        const el = $(ReactDOM.findDOMNode(component));

        el.find('#new_todo').val('new todo');

        ReactTestUtils.Simulate.click(el.find('#add_todo').get(0));

        addTodoActionSpy.should.have.been.called.with('new todo');
    });
});
