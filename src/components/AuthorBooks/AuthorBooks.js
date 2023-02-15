import "./AuthorBooks.scss";
import { Link, useLocation, useParams } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete-icon.png";
import editIcon from "../../assets/icons/edit-icon.png";

const AuthorBooks = ({ data }) => {
  const { REACT_APP_API_URL } = process.env;
  const { authorid } = useParams();
  const location = useLocation();

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
          {location.pathname === `/profile/${authorid}` ? (
            <div className="author-books__edit-delete-container">
              <Link
                to={`/profile/${authorid}/edit/${book.id}`}
                className="author-books__link"
              >
                <img
                  src={editIcon}
                  alt="edit icon"
                  className="author-books__icon"
                />
              </Link>
              <Link
                to={`/profile/${authorid}/delete/${book.id}`}
                className="author-books__link"
              >
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  className="author-books__icon"
                />
              </Link>
            </div>
          ) : (
            <div className=""></div>
          )}
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
