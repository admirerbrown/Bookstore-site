import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Book from './Book';
import { deleteBook } from '../redux/apiCalls/booksApi';

const BookHolder = () => {
  const dispatch = useDispatch();

  const handleDelete = (bookId) => {
    dispatch(deleteBook({ id: bookId }));
  };

  const bookList = useSelector((state) => state.bookApi.data);

  return (
    <div className="book-holder">
      {bookList.map((book) => (
        <div key={book.Id} className="book-item">
          <div className="sect-1">
            <p className="cat">{book.category}</p>
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
                onClick={() => handleDelete(book.Id)}
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
            <div className="progress-bar" />
            <p className="p0">
              64%
              <br />
              <span className="chapter-title">completed</span>
            </p>
            <br />

            <div className="divider" />

            <div className="sect-3">
              <p className="chapter-title">
                CURRENT CHAPTER
                <br />
                <span className="p1">CHAPTER 17</span>
              </p>
              <br />
              <button type="button" className="update">
                UPDATE PROGRESS
              </button>
            </div>
          </div>

        </div>
      ))}
      <hr />
      <Form />
    </div>
  );
};

export default BookHolder;
