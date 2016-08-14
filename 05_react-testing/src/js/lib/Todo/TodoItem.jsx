import React from 'react';

const TodoItem = ({ toggle, item }) => {
    let style = {};

    if (item.completed) {
        style.textDecoration = 'line-through';
    }

    return (
        <div className="todos__item" onClick={() => toggle(item)}>
            <blockquote>
                <p style={style}>{item.title}</p>
            </blockquote>
        </div>
    );
};

export default TodoItem;