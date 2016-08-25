import reducer, { initialState, add, toggle, doAdd } from '../../lib/Todo/reducer.js';
import { assert } from 'chai';

describe('Todo reducer', () => {
    it('toggles todo', () => {
        let state = reducer(initialState, toggle({ id: 1 }));

        assert.equal(initialState.items[0].completed, true);
        assert.equal(state.items[0].completed, false);
        assert.equal(state.items[1].completed, false);
        assert.equal(state.items[2].completed, false);
    });

    it('adds todo', () => {
        let state = reducer(initialState, doAdd('test todo'));
        assert.deepEqual(state.items[3], { id: 4, title: 'test todo', completed: false });
    });
});