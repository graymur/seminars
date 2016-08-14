import reducer, { initialState } from '../../lib/Todo/reducer.js';
import { assert } from 'chai';

describe('Todo reduces', () => {
    it('toggles todo', () => {
        let state = reducer(initialState, {
            type: 'TOGGLE_TODO',
            todo: { id: 1 }
        });

        assert.equal(initialState[0].completed, true);
        assert.equal(state[0].completed, false);
        assert.equal(state[1].completed, false);
        assert.equal(state[2].completed, false);
    });

    it('adds todo', () => {
        let state = reducer(initialState, {
            type: 'ADD_TODO',
            title: 'test todo'
        });

        assert.deepEqual(state[3], { id: 4, title: 'test todo', completed: false });
    });
});

