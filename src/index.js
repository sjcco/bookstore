import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';
import './index.css';
import uniqueId from './helpers';

const books = [
  {
    id: uniqueId(),
    title: 'Life of Pi',
    category: 'Action',
  },
  {
    id: uniqueId(),
    title: 'Memoirs of a Geisha',
    category: 'History',
  },
  {
    id: uniqueId(),
    title: 'Carrie',
    category: 'Horror',
  },
  {
    id: uniqueId(),
    title: 'I know Why the Caged Bird Sings',
    category: 'Biography',
  },
];

const store = createStore(rootReducer, { books });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
