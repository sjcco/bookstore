const categoryFilter = (state = 'All', action) => {
  const { type, payload } = action;
  if (type === 'CHANGE_FILTER') {
    return payload;
  }
  return state;
};

export default categoryFilter;
