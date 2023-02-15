import "./AuthorsList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);
  const { REACT_APP_API_URL } = process.env;

  useEffect(() => {
    try {
      const getAuthors = async () => {
        const { data } = await axios.get(`${REACT_APP_API_URL}/authors/books`);
        setAuthors(data);
      };
      getAuthors();
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!authors) {
    return <p>Loading...</p>;
  }

  const authorsList = authors.map((author) => {
    return (
      <Link
        to={`/authors/${author.id}`}
        key={author.id}
        className="authors-list"
      >
        <section className="authors-list__container">
          <article className="authors-list__author-portrait-container">
            <img
              src={REACT_APP_API_URL + author.portrait_path}
              alt="Portrait of Author"
              className="authors-list__author-portrait"
            />
          </article>
          <article className="authors-list__author-info-container">
            <h3 className="authors-list__title">
              NAME:{" "}
              <span className="authors-list__author-info">{`${author.first_name} ${author.last_name}`}</span>
            </h3>
            <h3 className="authors-list__title">
              ABOUT:{" "}
              <span className="authors-list__author-info">{`${author.about}`}</span>
            </h3>
          </article>
          <article className="authors-list__featured-book-container">
            <h3 className="authors-list__featured-title">
              FEATURED BOOK:{" "}
              <span className="authors-list__book-title">
                {author.books[0].book_name}
              </span>
            </h3>
            <Link
              to={`/books/${author.books[0].id}`}
              className="authors-list__featured-book-link"
            >
              <img
                src={REACT_APP_API_URL + author.books[0].cover_path}
                alt="featured book from author"
                className="authors-list__featured-book"
              />
            </Link>
          </article>
        </section>
      </Link>
    );
  });
  return authorsList;
};

export default AuthorsList;
