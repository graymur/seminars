const initialState = [
    { id: 1, "title": "Выучить Реакт", "completed": true },
    { id: 2, "title": "Выучить Редукс", "completed": false },
    { id: 3, "title": "Выучить Вебпак", "completed": false }
];

export default (state = initialState, action = {}) => {
    let newState, todos;

    switch (action.type) {
        case 'TOGGLE_TODO':
            newState = state.map(item => {
                if (item.id === action.todo.id) {
                    item.completed = !item.completed;
                }

                return item;
            });

            break;

        case 'ADD_TODO':
            newState = state.slice();

            const id = Math.max.apply(null, newState.map(x => x.id)) + 1;

            newState.push({
                id,
                title: action.title,
                completed: false
            });

            break;

        default:
            newState = state;
            break;
    }

    return newState;
};