export const initialState = 0;

export default (state = initialState, action = {}) => {
    let newState;

    switch (action.type) {
        case 'INCREMENT_COUNTER':
            newState = state + 1;
            break;

        case 'DECREMENT_COUNTER':
            newState = state - 1;
            break;

        default:
            newState = state;
            break;
    }

    return newState;
};