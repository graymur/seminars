import reducer, { initialState } from '../../lib/Counter/reducer.js';
import { assert } from 'chai';

describe('Counter reduces', () => {
    it('increments counter', () => {
        let state = reducer(initialState, { type: 'INCREMENT_COUNTER' });
        assert.equal(state, 1);
    });

    it('decrements counter', () => {
        let state = reducer(initialState, { type: 'DECREMENT_COUNTER' });
        assert.equal(state, -1);
    });
});

