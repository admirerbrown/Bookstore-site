import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Book from './Book';
import { removeBook } from '../redux/books/books';

// export default BookHolder;
const BookHolder = () => {
  const dispatch = useDispatch();

  const handleDelete = (bookId) => {
    dispatch(removeBook({ id: bookId }));
  };
  const bookList = useSelector((state) => state.book);

  return (
    <div className="book-holder">
      {bookList.map((book) => (
        <div key={book.id} className="book-item">
          <div className="sect-1">
            <Book title={book.title} author={book.author} />
            <br />
            <div className="book-option">
              <button type="button" className="bk-btn">
                Comments
              </button>
              <div className="sm-divider" />
              <button
                type="button"
                className="bk-btn"
                onClick={() => handleDelete(book.id)}
              >
                Remove
              </button>
              <div className="sm-divider" />
              <button type="button" className="bk-btn">
                Edit
              </button>
            </div>
          </div>
          <div className="sect-2">
            <p>64% completed</p>
          </div>
          <div className="divider" />
          <div className="sect-3">
            <p>CURRENT CHAPTER</p>
            <p>CHAPTER 17</p>
            <br />
            <button type="button" className="update">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      ))}
      <hr />
      <Form />
    </div>
  );
};

export default BookHolder;
