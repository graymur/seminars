import React from 'react';
import { connect } from 'react-redux';

import { add, toggle } from './reducer.js';

import TodoForm from './TodoForm.jsx';
import TodoItem from './TodoItem.jsx';

@connect(
    state => ({
        todos: state.todos.items,
        loading: state.todos.loading
    }),
    { add, toggle }
)
class TodoList extends React.Component {
    render() {
        const { todos, loading } = this.props;

        const completed = todos.filter(item => item.completed);
        const pending = todos.filter(item => !item.completed);

        return (
            <div className="todos">

                <TodoForm addTodo={this.props.add} disabled={loading} />

                <h1>Невыполненные задачи:</h1>
                {pending.map(item => <TodoItem key={item.id} item={item} toggle={this.props.toggle} />)}

                <h1>Выполненные задачи:</h1>
                {completed.map(item => <TodoItem key={item.id} item={item} toggle={this.props.toggle} />)}

            </div>
        );
    }
}

export default TodoList;