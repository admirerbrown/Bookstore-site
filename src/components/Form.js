const Form = () => (
  <div className="form">
    <h2> ADD NEW BOOK</h2>
    <form method="" className="form-main">
      <input className="book-name" placeholder="Book title" type="text" required />
      <input className="book-title" placeholder="author" type="text" required />
      <input className="submit-btn" value="ADD BOOK" type="submit" />
    </form>
  </div>
);

export default Form;
