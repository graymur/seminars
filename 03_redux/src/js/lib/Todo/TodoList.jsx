import React from 'react';

import TodoForm from './TodoForm.jsx';
import TodoItem from './TodoItem.jsx';

export default class TodoList extends React.Component {
    toggle(todo) {
        this.props.store.dispatch({
            type: 'TOGGLE_TODO',
            todo
        });
    }

    addTodo(title) {
        this.props.store.dispatch({
            type: 'ADD_TODO',
            title
        });
    }

    render() {
        const todos = this.props.store.getState().todos;
        const completed = todos.filter(item => item.completed);
        const pending = todos.filter(item => !item.completed);

        return (
            <div className="todos">

                <TodoForm addTodo={this.addTodo.bind(this)} />

                <h1>Невыполненные задачи:</h1>
                {pending.map(item => <TodoItem key={item.id} item={item} toggle={this.toggle.bind(this)} />)}

                <h1>Выполненные задачи:</h1>
                {completed.map(item => <TodoItem key={item.id} item={item} toggle={this.toggle.bind(this)} />)}

            </div>
        );
    }
}