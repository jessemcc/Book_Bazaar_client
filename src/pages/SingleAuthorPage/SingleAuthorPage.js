import axios from "axios";
import "./SingleAuthorPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AboutAuthor from "../../components/AboutAuthor/AboutAuthor";
import AuthorBooks from "../../components/AuthorBooks/AuthorBooks";

const SingleAuthorPage = ({ isLoggedIn }) => {
  const [currentAuthor, setCurrentAuthor] = useState(null);
  const [currentAuthorBooks, setCurrentAuthorBooks] = useState([]);
  const { authorid } = useParams();
  const { REACT_APP_API_URL } = process.env;

  useEffect(() => {
    try {
      const getAuthor = async () => {
        const { data } = await axios.get(
          `${REACT_APP_API_URL}/authors/${authorid}`
        );
        setCurrentAuthor(data);
      };
      getAuthor();
    } catch (error) {
      console.error(error);
    }
  }, [authorid]);

  useEffect(() => {
    try {
      const getAuthorBooks = async () => {
        const { data } = await axios.get(
          `${REACT_APP_API_URL}/authors/${authorid}/books`
        );
        setCurrentAuthorBooks(data);
      };
      getAuthorBooks();
    } catch (error) {
      console.error(error);
    }
  }, [authorid]);

  if (!currentAuthor || !currentAuthorBooks) {
    return <p>Loading...</p>;
  }

  document.title = `Book Bazaar - ${currentAuthor[0].first_name} ${currentAuthor[0].last_name}`;
  return (
    <section className="author">
      <article className="author__container">
        <article className="author__about-container">
          <AboutAuthor data={currentAuthor} />
        </article>
        <h1 className="author__books-title">{`Books from ${currentAuthor[0].first_name} ${currentAuthor[0].last_name}`}</h1>
        <article className="author__book-list">
          <AuthorBooks data={currentAuthorBooks} isLoggedIn={isLoggedIn} />
        </article>
      </article>
    </section>
  );
};

export default SingleAuthorPage;
