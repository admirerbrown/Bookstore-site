import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postBook } from '../redux/apiCalls/booksApi';

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Select Category');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: nanoid(),
      title,
      author,
      category,
    };

    dispatch(postBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form">
      <h2 className="f-head"> ADD NEW BOOK</h2>
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
        <select
          name="category-option"
          id="category-option"
          required
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">{category}</option>
          <option value="Romance">Romance</option>
          <option value="Epic Adventure">Epic Adventure</option>
          <option value="Fiction">Fiction</option>
          <option value="Drama">Drama</option>
        </select>
        <input className="submit-btn" value="ADD BOOK" type="submit" />
      </form>
    </div>
  );
};

export default Form;
