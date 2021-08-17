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
      <table>
        <thead>
          <tr>
            <th>book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (<Book key={book.id} book={book} removeBook={handleRemoveBook} />))}
        </tbody>
      </table>
    </>
  );
};

export default BookList;
