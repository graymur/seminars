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
        const { disabled } = this.props;
        return (
            <div className="todos__form form-inline">
                <input className="form-control" placeholder="Название" ref="input" id="new_todo" defaultValue={this.props.value || ''} disabled={disabled} />
                <button className="btn btn-default" onClick={this.addTodo.bind(this)} id="add_todo" disabled={disabled}>Создать</button>
            </div>
        );
    }
}