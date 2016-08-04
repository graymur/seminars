import React from 'react';
import { render } from 'react-dom';
import Counter from './lib/Counter/Counter.jsx';
import TodoList from './lib/Todo/TodoList.jsx';

import store from './redux/store.js';

import '../sass/main.sass';

store.subscribe(() => {
    render(<div><Counter store={store} /><TodoList store={store} /></div>, document.getElementById('root'));
});

store.dispatch({ type: 'INIT' });