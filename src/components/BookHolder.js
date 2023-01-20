import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import Book from './Book';

const bookList = [
  {
    author: 'john paul',
    title: 'things fall apart',
  },
  {
    author: 'mercy grace',
    title: 'orange is the new black',
  },
  {
    author: 'ronalds queen',
    title: "sorcerer's stone",
  },
];

const BookHolder = () => (
  <div className="book-holder">
    {bookList.map((book) => (
      <div key={uuidv4()} className="book-item">
        <div className="sect-1">
          <Book title={book.title} author={book.author} />
          <br />
          <div className="book-option">
            <button type="button" className="bk-btn">Comments</button>
            <div className="sm-divider" />
            <button type="button" className="bk-btn">Removed</button>
            <div className="sm-divider" />
            <button type="button" className="bk-btn">Edit</button>
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

export default BookHolder;
