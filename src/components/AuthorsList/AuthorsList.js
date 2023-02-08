import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);
  const { REACT_APP_API_URL } = process.env;

  useEffect(() => {
    try {
      const getAuthors = async () => {
        const { data } = await axios.get(`${REACT_APP_API_URL}/authors`);
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
    console.log(author);
    return (
      <Link to="/authors/:authorid" key={author.id} className="authors-list">
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
              Name:{" "}
              <span className="authors-list__author-name">{`${author.first_name} ${author.last_name}`}</span>
            </h3>
            <h3 className="authors-list__title">
              About Author:{" "}
              <span className="authors-list__author-name">{`${author.about}`}</span>
            </h3>
          </article>
          <article className="authors-list__featured-book-container">
            <img
              src={REACT_APP_API_URL + authors.cover_path}
              alt=""
              className="authors-list__featured-book"
            />
          </article>
        </section>
      </Link>
    );
  });
  return authorsList;
};

export default AuthorsList;
