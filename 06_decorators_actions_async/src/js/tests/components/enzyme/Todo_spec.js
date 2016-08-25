import TodoList from '../../../lib/Todo/TodoList.jsx';
import TodoItem from '../../../lib/Todo/TodoItem.jsx';
import TodoForm from '../../../lib/Todo/TodoForm.jsx';
import { initialState } from '../../../lib/Todo/reducer.js';

import React from 'react';
import chai, { assert } from 'chai';
import { shallow, mount } from 'enzyme';

import spies from 'chai-spies';

chai.use(spies);
const should = chai.should();

const toggleTodoAction = () => {};
const toggleTodoActionSpy = chai.spy(toggleTodoAction);

const addTodoAction = () => {};
const addTodoActionSpy = chai.spy(addTodoAction);

const props = {
    todos: initialState.items,
    loading: false,
    toggle: toggleTodoActionSpy,
    add: addTodoActionSpy
};

describe('Todos enzyme', () => {
    it ('Renders item', () => {
        const component = shallow(<TodoList {...props}/>);

        assert.equal(component.find('h1').length, 2);
        assert.equal(component.find('.todos__item').length, 0);
    });

    it ('Renders single todo', () => {
        const component = shallow(<TodoItem item={initialState.items[0]}/>);

        assert.equal(component.find('p').text(), 'Выучить Реакт');
        assert.equal(component.find('p').props('style').style.textDecoration, 'line-through');
    });

    it ('Toggles todo', () => {
        const component = shallow(<TodoItem item={initialState.items[1]} toggle={toggleTodoActionSpy}/>);
        component.find('.todos__item').simulate('click');
        toggleTodoActionSpy.should.have.been.called.with({ id: 2, title: 'Выучить Редукс', completed: false });
    });

    it ('Adds todo', () => {
        const component = mount(<TodoForm addTodo={addTodoActionSpy} value="new todo"/>);
        component.find('#add_todo').simulate('click');

        addTodoActionSpy.should.have.been.called.with('new todo');
    });
});
