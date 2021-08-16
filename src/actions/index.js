import uniqueId from '../helpers';

const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  payload: {
    id: uniqueId(),
    title: book.title,
    category: book.category,
  },
});

const REMOVE_BOOK = book => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

export { CREATE_BOOK, REMOVE_BOOK };
