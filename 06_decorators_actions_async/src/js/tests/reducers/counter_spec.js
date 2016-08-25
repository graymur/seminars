import reducer, { initialState, increment, decrement } from '../../lib/Counter/reducer.js';
import { assert } from 'chai';

describe('Counter reduces', () => {
    it('increments counter', () => {
        let state = reducer(initialState, increment());
        assert.equal(state, 1);
    });

    it('decrements counter', () => {
        let state = reducer(initialState, decrement());
        assert.equal(state, -1);
    });
});

