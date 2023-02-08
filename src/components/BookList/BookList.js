import "./BookList.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookList = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    try {
      const { REACT_APP_API_URL } = process.env;
      const getFeatured = async () => {
        const { data } = await axios.get(`${REACT_APP_API_URL}/books`);
        setBookList(data);
      };
      getFeatured();
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!bookList) {
    return <p>Loading...</p>;
  }

  const books = bookList
    .sort((a, b) => 0.5 - Math.random())
    .splice(0, 10)
    .map((book) => {
      return (
        <Link to="books/:bookid" key={book.id} className="bookList">
          <article className="bookList__title">
            <h3 className="bookList__h3">Title</h3>
            <p to="/books/:bookid" className="bookList__p">
              {book.book_name}
            </p>
          </article>
          <article className="bookList__author">
            <h3 className="bookList__h3">Author</h3>
            <p className="bookList__p">{`${book.first_name} ${book.last_name}`}</p>
          </article>
          <article className="bookList__genre">
            <h3 className="bookList__h3">Genre</h3>
            <p className="bookList__p">{book.genre}</p>
          </article>
          <article className="bookList__price">
            <h3 className="bookList__h3">price</h3>
            <p className="bookList__price-title">{`${book.price} $`}</p>
          </article>
        </Link>
      );
    });

  return books;
};

export default BookList;
