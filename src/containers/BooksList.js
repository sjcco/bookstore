import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import { CHANGE_FILTER, REMOVE_BOOK } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import { filterByCategory } from '../helpers';

const BookList = () => {
  const books = useSelector(state => (filterByCategory(state)));
  const dispatch = useDispatch();
  const handleRemoveBook = book => {
    dispatch(REMOVE_BOOK(book));
  };
  const handleFilter = filter => {
    dispatch(CHANGE_FILTER(filter));
  };

  return (
    <>
      <CategoryFilter filterHandler={handleFilter} />
      <div className="container">
        {books.map(book => (
          <Book key={book.id} book={book} removeBook={handleRemoveBook} />))}
      </div>
    </>
  );
};

export default BookList;
