/* eslint-disable react/prop-types */

const Book = ({ title, author }) => (
  <div className="book-info">
    <h3 className="b-title">{title}</h3>
    <p className="b-author">{author}</p>
  </div>
);

export default Book;
