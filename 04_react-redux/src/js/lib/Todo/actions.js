export const addTodoAction = title => ({
    type: 'ADD_TODO',
    title
});

export const toggleTodoAction = todo => ({
    type: 'TOGGLE_TODO',
    todo
});