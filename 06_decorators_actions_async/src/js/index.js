import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import Counter from './lib/Counter/Counter.jsx';
import TodoList from './lib/Todo/TodoList.jsx';

import store from './redux/store.js';

import '../sass/main.sass';

render((
    <Provider store={store}>
        <div>
            <Counter />
            <TodoList />
        </div>
    </Provider>
), document.getElementById('root'));