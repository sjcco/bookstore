import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import NavBar from './NavBar';

const App = () => (
  <div className="App">
    <NavBar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
