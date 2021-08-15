import { useState } from 'react';
import { connect } from 'react-redux';
import { CREATE_BOOK } from '../actions';

const BooksForm = props => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [book, setBook] = useState({
    title: '',
    category: 'Action',
  });

  const handleChange = e => {
    if (e.target.id === 'title') {
      setBook({
        title: e.target.value,
        category: book.category,
      });
    } else if (e.target.id === 'category') {
      setBook({
        title: book.title,
        category: e.target.value,
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    props.dispatch(CREATE_BOOK(book));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input type="text" id="title" onChange={handleChange} />
      </label>
      <label htmlFor="category">
        Category
        <select name="category" id="category" onChange={handleChange}>
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <button className="button" type="submit">Save</button>
    </form>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(BooksForm);
