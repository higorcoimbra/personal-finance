import { createStore } from 'react-redux';
import rootReducer from '../reducer/rootReducer';

const store = createStore(rootReducer);

export default store;
