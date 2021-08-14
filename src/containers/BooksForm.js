const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <label htmlFor="title">
        Title
        <input type="text" id="title" />
      </label>
      <label htmlFor="category">
        Category
        <select name="category" id="category">
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <button className="button" type="submit">Save</button>
    </form>
  );
};

export default BooksForm;
