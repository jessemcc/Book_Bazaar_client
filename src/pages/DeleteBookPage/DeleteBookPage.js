import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./DeleteBookPage.scss";

const DeleteBookPage = () => {
  const { REACT_APP_API_URL } = process.env;
  const { authorid, bookid } = useParams();
  const navigate = useNavigate();
  document.title = "Book Bazaar - Delete Book";

  const deleteBook = async () => {
    await axios.delete(`${REACT_APP_API_URL}/delete/${authorid}/${bookid}`);
    navigate(`/profile/${authorid}`);
  };

  const toProfile = () => {
    navigate(`/profile/${authorid}`);
  };

  return (
    <section className="delete-book page-container">
      <article className="delete-book__container box-container">
        <h1 className="delete-book__title">
          ARE YOU SURE YOU WISH TO DELETE YOUR BOOK? THIS ACTION IS IRREVERSIBLE
        </h1>
        <div className="delete-book__buttons-container button-container">
          <button onClick={deleteBook} className="delete-book__button button">
            DELETE
          </button>
          <button onClick={toProfile} className="delete-book__button button">
            CANCEL
          </button>
        </div>
      </article>
    </section>
  );
};

export default DeleteBookPage;
