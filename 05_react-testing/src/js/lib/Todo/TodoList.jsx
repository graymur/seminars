import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodoAction, toggleTodoAction } from './actions.js';

import TodoForm from './TodoForm.jsx';
import TodoItem from './TodoItem.jsx';

export class TodoList extends React.Component {
    render() {
        const todos = this.props.todos;

        const completed = todos.filter(item => item.completed);
        const pending = todos.filter(item => !item.completed);

        return (
            <div className="todos">

                <TodoForm addTodo={this.props.addTodoAction} />

                <h1>Невыполненные задачи:</h1>
                {pending.map(item => <TodoItem key={item.id} item={item} toggle={this.props.toggleTodoAction} />)}

                <h1>Выполненные задачи:</h1>
                {completed.map(item => <TodoItem key={item.id} item={item} toggle={this.props.toggleTodoAction} />)}

            </div>
        );
    }
}

const mapStateToProps = state => ({ todos: state.todos });
//const mapDispatchToProps = dispatch => bindActionCreators({ addTodoAction, toggleTodoAction }, dispatch);
const mapDispatchToProps = { addTodoAction, toggleTodoAction };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);