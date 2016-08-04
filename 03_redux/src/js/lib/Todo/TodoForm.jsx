import React from 'react';

export default class TodoForm extends React.Component {
    addTodo() {
        const input = this.refs.input;

        if (input.value !== '') {
            this.props.addTodo(input.value);
        }

        input.value = '';
    }

    render() {
        return (
            <div className="todos__form form-inline">
                <input type="email" className="form-control" placeholder="Название" ref="input" />
                <button className="btn btn-default" onClick={this.addTodo.bind(this)}>Создать</button>
            </div>
        );
    }
}