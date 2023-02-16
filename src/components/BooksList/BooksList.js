import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import "./BooksList.scss";

const BookList = () => {
  const [booksList, setBooksList] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    try {
      const getBooksList = async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/books`
        );
        if (selectedGenre) {
          let randomBooks = data.filter(
            (book) => book.genre.toLowerCase() === selectedGenre
          );
          randomBooks.sort((a, b) => 0.5 - Math.random());
          setFilteredBooks(randomBooks);
          return randomBooks;
        } else {
          setBooksList(data.sort((a, b) => 0.5 - Math.random()).splice(0, 10));
          setFilteredBooks(
            data.sort((a, b) => 0.5 - Math.random()).splice(0, 10)
          );
        }
      };
      getBooksList();
    } catch (error) {
      console.error(error);
    }
  }, [selectedGenre]);

  const handleFilter = (genre) => {
    setSelectedGenre(genre);
  };

  if (!booksList) {
    return <p>Loading...</p>;
  }

  const books = filteredBooks.map((book) => {
    return (
      <Link
        to={`/books/${book.id}`}
        key={book.id}
        className="book-card__container box-container"
      >
        <article className="book-card__image-info-container">
          <img
            src={process.env.REACT_APP_API_URL + book.cover_path}
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
      </Link>
    );
  });

  return (
    <section className="book-card">
      <article className="book-card__filter">
        <Filter handleFilter={handleFilter} />
      </article>
      {filteredBooks.length === 0 && (
        <article className="book-card__no-books-container">
          <h1 className="book-card__no-books">
            There are no books of this genre at the moment
          </h1>
        </article>
      )}
      {books}
    </section>
  );
};

export default BookList;
