import React from 'react';

import TodoForm from './TodoForm.jsx';
import TodoItem from './TodoItem.jsx';

let todos = [
    { id: 1, "title": "Выучить Реакт", "completed": true },
    { id: 2, "title": "Выучить Редукс", "completed": false },
    { id: 3, "title": "Выучить Вебпак", "completed": false }
];

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: todos
        };
    }

    toggle(todo) {
        let todos = this.state.todos.slice().map(item => {
            if (item.id === todo.id) {
                item.completed = !item.completed;
            }

            return item;
        });

        this.setState({ todos });
    }

    addTodo(title) {
        let todos = this.state.todos.slice();

        const id = Math.max.apply(null, this.state.todos.map(x => x.id)) + 1;

        todos.push({
            id,
            title,
            completed: false
        });

        this.setState({ todos });
    }

    render() {
        const completed = this.state.todos.filter(item => item.completed);
        const pending = this.state.todos.filter(item => !item.completed);

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