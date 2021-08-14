const books = (state = [], action) => {
  const { type, payload } = action;
  if (type === 'CREATE_BOOK') {
    return [...state, payload];
  } if (type === 'REMOVE_BOOK') {
    return state.filter(book => book.id !== payload.id);
  }
  return state;
};

export default books;
