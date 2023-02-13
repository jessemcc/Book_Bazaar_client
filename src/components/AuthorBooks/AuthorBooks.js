import "./AuthorBooks.scss";
import { Link } from "react-router-dom";

const AuthorBooks = ({ data }) => {
  const { REACT_APP_API_URL } = process.env;

  const booksList = data.map((book) => {
    return (
      <Link to={`/books/${book.id}`} className="author-books" key={book.id}>
        <article className="author-books__container">
          <img
            src={REACT_APP_API_URL + book.cover_path}
            alt="Book Cover"
            className="author-books__cover"
          />
          <h3 className="author-books__title">
            TITLE:{" "}
            <span className="author-books__content">{book.book_name}</span>
          </h3>
          <h3 className="author-books__title">
            PRICE: <span className="author-books__content">{book.price}$</span>
          </h3>
        </article>
      </Link>
    );
  });

  return data.length === 0 ? (
    <article className="author-books__no-books-message-container">
      <h2 className="author-books__no-books-massage">
        Please upload a book to be shown in the Authors section
      </h2>
    </article>
  ) : (
    booksList
  );
};

export default AuthorBooks;
