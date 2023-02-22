import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ProfilePage.scss";
import AuthorBooks from "../../components/AuthorBooks/AuthorBooks";
import ProfileAuthor from "../../components/ProfileAuthor/ProfileAuthor";

const ProfilePage = () => {
  const [currentAuthor, setCurrentAuthor] = useState(null);
  const [currentAuthorBooks, setCurrentAuthorBooks] = useState([]);
  const { authorid } = useParams();

  useEffect(() => {
    try {
      const getAuthor = async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/authors/${authorid}`
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
          `${process.env.REACT_APP_API_URL}/authors/${authorid}/books`
        );
        setCurrentAuthorBooks(data);
      };
      getAuthorBooks();
    } catch (error) {
      console.error(error);
    }
  }, [authorid]);

  useEffect(() => {
    if (currentAuthor && currentAuthorBooks) {
      document.title = `Book Bazaar - ${currentAuthor[0].first_name} ${currentAuthor[0].last_name}`;
    }
  }, [currentAuthor, currentAuthorBooks]);

  if (!currentAuthor || !currentAuthorBooks) {
    return <p>Loading...</p>;
  }

  return (
    <section className="profile page-container">
      <article className="profile__container">
        <article className="profile__about-container">
          <ProfileAuthor data={currentAuthor} />
        </article>
        <h1 className="profile__books-title">{`Your books`}</h1>
        <article className="profile__book-list">
          <AuthorBooks
            data={currentAuthorBooks}
            currentAuthor={currentAuthor[0]}
          />
        </article>
      </article>
    </section>
  );
};

export default ProfilePage;
