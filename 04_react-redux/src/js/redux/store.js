import { createStore } from 'redux';
import reducer from './reducer.js';

const store = createStore(reducer, {
    counter: 0,
    todos: [
        { id: 1, "title": "Выучить Реакт", "completed": true },
        { id: 2, "title": "Выучить Редукс", "completed": false },
        { id: 3, "title": "Выучить Вебпак", "completed": false }
    ]
});

export default store;