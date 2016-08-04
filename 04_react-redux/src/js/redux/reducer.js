import { combineReducers } from 'redux';

import counter from '../lib/Counter/reducer.js';
import todos from '../lib/Todo/reducer.js';

export default combineReducers({
    counter,
    todos
});
