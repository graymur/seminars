import React from 'react';

export default class TodoItem extends React.Component {
    render() {
        let style = {};

        if (this.props.item.completed) {
            style.textDecoration = 'line-through';
        }

        return (
            <div className="todos__item">
                <blockquote onClick={() => this.props.toggle(this.props.item)}>
                    <p style={style}>{this.props.item.title}</p>
                </blockquote>
            </div>
        );
    }
}