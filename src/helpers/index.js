const filterByCategory = state => {
  const { books, categoryFilter } = state;
  if (categoryFilter === 'All') {
    return books;
  }
  return books.filter(book => book.category === categoryFilter);
};

const uniqueId = () => Math.floor(Math.random() * 9000000000) + 1;

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export { uniqueId, categories, filterByCategory };
