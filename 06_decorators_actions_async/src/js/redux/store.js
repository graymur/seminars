import { createStore, compose } from 'redux';
import { install } from 'redux-loop';
import reducer from './reducer.js';

const enhancer = compose(install());

export default createStore(reducer, {}, enhancer);