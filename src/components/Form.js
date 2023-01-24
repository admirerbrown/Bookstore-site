import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBook } from '../redux/books/books'; // action to dispatch..

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form">
      <h2> ADD NEW BOOK</h2>
      <form className="form-main" onSubmit={handleSubmit}>
        <input
          className="book-name"
          value={title}
          placeholder="Book title"
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="book-title"
          placeholder="author"
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input className="submit-btn" value="ADD BOOK" type="submit" />
      </form>
    </div>
  );
};

export default Form;
