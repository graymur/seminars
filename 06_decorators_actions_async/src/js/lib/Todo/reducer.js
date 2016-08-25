import { createAction, createReducer } from 'redux-act';
import { loop, Effects } from 'redux-loop';

export const initialState = {
    loading: false,
    items: [
        {id: 1, "title": "Выучить Реакт", "completed": true},
        {id: 2, "title": "Выучить Редукс", "completed": false},
        {id: 3, "title": "Выучить Вебпак", "completed": false}
    ]
};

export const add = createAction('add todo');
export const doAdd = createAction('actually add todo');
export const toggle = createAction('toggle todo');

const delay = title =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(title), 3000);
    }).then(title => {
        return doAdd(title);
    }).catch(err => {
        return console.log(err);
    });

export default createReducer({
    [add]: (state, title) => {
        return loop(
            { ...state, loading: true },
            Effects.promise(delay, title)
        );
    },
    [doAdd]: (state, title) => {
        const id = Math.max.apply(null, state.items.map(x => x.id)) + 1;

        return {
            ...state,
            loading: false,
            items: [
                ...state.items,
                { id, title, completed: false }
            ]
        };
    },
    [toggle]: (state, todo) => {
        return {
            ...state,
            items: state.items.map(item => {
                if (item.id === todo.id) {
                    item = Object.assign({}, item, {completed: !item.completed});
                }

                return item;
            })
        };
    }
}, initialState);