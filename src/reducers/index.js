import { combineReducers } from 'redux';
import books from './books';
import categoryFilter from './filter';

const rootReducer = combineReducers({ books, categoryFilter });

export default rootReducer;
