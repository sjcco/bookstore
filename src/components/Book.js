import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = props => {
  const { book, removeBook } = props;
  return (
    <div className="card my-3">
      <div className="card-body mx-2">
        <div className="row">
          <div className="col-6">
            <p className="my-0 book-category">{book.category}</p>
            <h2 className="my-0 book-title">{book.title}</h2>
            <p className="book-info">Suzane Collins</p>
            <ul className="d-flex list-unstyled">
              <li className="nav-item"><a className="text-decoration-none book-info pe-2 border-end" href="#/Book">Comments</a></li>
              <li className="nav-item"><a className="text-decoration-none book-info px-2 border-end" href="#/Book" onClick={() => removeBook(book)}>Remove</a></li>
              <li className="nav-item"><a className="text-decoration-none book-info px-2" href="#/Book">Edit</a></li>
            </ul>
          </div>
          <div className="col-5 col-lg-3 my-auto">
            <div className="row border-end border-gray">
              <span className="col-6 progress-icon">
                <CircularProgressbar value={33} />
              </span>
              <div className="col-6 d-flex flex-column my-auto">
                <h2 className="book-percentage">33 %</h2>
                <p className="book-info text-secondary my-0">Completed</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 d-flex flex-row flex-lg-column justify-content-between my-auto">
            <p className="col-auto book-info text-secondary my-0 ms-3">CURRENT CHAPTER</p>
            <p className="book-info text-black my-0 ms-3">Chapter 12</p>
            <button type="button" className="btn btn-primary my-0 ms-3">Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
