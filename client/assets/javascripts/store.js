import { createStore } from 'redux';
import rootReducer from './reducers/root_reducer.js';

const store = createStore(reducer);

export default store;