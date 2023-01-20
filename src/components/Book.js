/* eslint-disable react/prop-types */

const Book = ({ title, author }) => (
  <div className="book-info">
    <h3>{title}</h3>
    <p>{author}</p>
  </div>
);

export default Book;
