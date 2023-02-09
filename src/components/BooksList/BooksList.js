import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BooksList.scss";

const BookList = () => {
  const [booksList, setBooksList] = useState([]);
  const { REACT_APP_API_URL } = process.env;

  useEffect(() => {
    try {
      const getBooksList = async () => {
        const { data } = await axios.get(`${REACT_APP_API_URL}/books`);
        setBooksList(data.sort((a, b) => 0.5 - Math.random()).splice(0, 10));
      };
      getBooksList();
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!booksList) {
    return <p>Loading...</p>;
  }

  const books = booksList.map((book) => {
    return (
      <Link to={`/books/${book.id}`} key={book.id} className="book-card">
        <article className="book-card__container">
          <article className="book-card__image-info-container">
            <img
              src={REACT_APP_API_URL + book.cover_path}
              alt="book cover"
              className="book-card__book-cover"
            />
            <div className="book-card__book-info">
              <h3 className="book-card__title">
                TITLE:{" "}
                <span className="book-card__content">{book.book_name}</span>
              </h3>
              <h3 className="book-card__title">
                AUTHOR:{" "}
                <span className="book-card__content">{`${book.first_name} ${book.last_name}`}</span>
              </h3>
              <h3 className="book-card__title">
                GENRE: <span className="book-card__content">{book.genre}</span>
              </h3>
              <h3 className="book-card__title">
                STOCK: <span className="book-card__content">{book.stock}</span>
              </h3>
              <h3 className="book-card__title">
                PRICE: <span className="book-card__content">{book.price}</span>
              </h3>
            </div>
          </article>
          <article className="book-card__description-container">
            <h3 className="book-card__title">
              DESCRIPTION:{" "}
              <span className="book-card__content">{book.description}</span>
            </h3>
          </article>
        </article>
      </Link>
    );
  });

  return books;
};

export default BookList;
