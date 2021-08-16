import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions';

const BookList = props => {
  const { books } = props;
  const handleRemoveBook = book => {
    // eslint-disable-next-line react/prop-types
    props.dispatch(REMOVE_BOOK(book));
  };

  return (
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
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
