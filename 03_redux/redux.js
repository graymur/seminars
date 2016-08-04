var state = {
    todos:     [
        { id: 1, "title": "Выучить Реакт", "completed": true },
        { id: 2, "title": "Выучить Редукс", "completed": false },
        { id: 3, "title": "Выучить Вебпак", "completed": false }
    ],
    counter: 0,
    popupOpened: 0
};
















































var addTodoAction = {
    type: 'ADD_TODO',
    title: 'Выучить Eslint'
};

var incrementCounterAction = {
    type: 'INCREMENT_COUNTER'
};


var decrementCounterAction = {
    type: 'DECREMENT_COUNTER'
};
































function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            const id = Math.max.apply(null, state.todos.map(x => x.id)) + 1;

            state.todos.push({
                id,
                title: action.title,
                completed: false
            });

            break;

        case 'INCREMENT_COUNTER':
            state.counter++;

            break;

        case 'DECREMENT_COUNTER':
            state.counter--;

            break;
    }

    return state;
}















//state = reducer(state, addTodoAction);
//state = reducer(state, incrementCounterAction);
//state = reducer(state, incrementCounterAction);
//state = reducer(state, decrementCounterAction);

//console.log(state);
























var actions = [addTodoAction, incrementCounterAction, incrementCounterAction, decrementCounterAction];

state = actions.reduce(function (carry, action) {
    return reducer(carry, action);
}, state);

console.log(state);
