export default function reducer(state, action) {
    let newState = state;
    let todos;

    switch (action.type) {
        case 'TOGGLE_TODO':
            todos = state.todos.slice().map(item => {
                if (item.id === action.todo.id) {
                    item.completed = !item.completed;
                }

                return item;
            });

            newState = Object.assign({}, state, { todos });
            break;

        case 'ADD_TODO':
            todos = state.todos.slice();

            const id = Math.max.apply(null, todos.map(x => x.id)) + 1;

            todos.push({
                id,
                title: action.title,
                completed: false
            });

            newState = Object.assign({}, state, { todos });

            break;

        case 'INCREMENT_COUNTER':
            newState = Object.assign({}, state, { counter: state.counter + 1 });

            break;

        case 'DECREMENT_COUNTER':
            newState = Object.assign({}, state, { counter: state.counter - 1 });

            break;
    }

    return newState;
}







