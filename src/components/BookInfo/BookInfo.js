import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookInfo.scss";

const BookInfo = ({ currentBook, setCurrentBook }) => {
  const { bookid } = useParams();
  const { REACT_APP_API_URL } = process.env;
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getBook = async () => {
        const { data } = await axios.get(
          `${REACT_APP_API_URL}/books/${bookid}`
        );
        setCurrentBook(data);
      };
      getBook();
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!currentBook) {
    return <p>Loading...</p>;
  }

  document.title = `Book Bazaar - ${currentBook[0].book_name}`;
  const handleAddToCart = async () => {
    try {
      await axios.post(`${REACT_APP_API_URL}/cart`, {
        book_name: currentBook[0].book_name,
        author_id: currentBook[0].author_id,
        description: currentBook[0].description,
        language: currentBook[0].language,
        genre: currentBook[0].genre,
        price: currentBook[0].price,
        stock: currentBook[0].stock,
        page_numbers: currentBook[0].page_numbers,
        cover: currentBook[0].cover,
        cover_path: currentBook[0].cover_path,
      });
      alert(`${currentBook[0].book_name} was successfully added to your cart!`);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="book-info">
      <article className="book-info__container box-container">
        <img
          src={REACT_APP_API_URL + currentBook[0].cover_path}
          alt="Book Cover"
          className="book-info__cover"
        />
        <article className="book-info__book-info">
          <h3 className="book-info__title">
            NAME:{" "}
            <span className="book-info__content">
              {currentBook[0].book_name}
            </span>
          </h3>
          <h3 className="book-info__title">
            AUTHOR:{" "}
            <span className="book-info__content">
              {`${currentBook[0].first_name} ${currentBook[0].last_name}`}
            </span>
          </h3>
          <h3 className="book-info__title">
            GENRE:{" "}
            <span className="book-info__content">{currentBook[0].genre}</span>
          </h3>
          <h3 className="book-info__title">
            PRICE:{" "}
            <span className="book-info__content">{currentBook[0].price}</span>
          </h3>
          <h3 className="book-info__title">
            STOCK:{" "}
            <span className="book-info__content">{currentBook[0].stock}</span>
          </h3>
          <h3 className="book-info__title">
            PAGE NUMBERS:{" "}
            <span className="book-info__content">
              {currentBook[0].page_numbers}
            </span>
          </h3>
          <h3 className="book-info__title">
            LANGUAGE:{" "}
            <span className="book-info__content">
              {currentBook[0].language}
            </span>
          </h3>
          <h3 className="book-info__title">
            DESCRIPTION:{" "}
            <span className="book-info__content">
              {currentBook[0].description}
            </span>
          </h3>
        </article>
        <article className="book-info__add-cart-container">
          <button className="book-info__button" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </article>
      </article>
    </section>
  );
};

export default BookInfo;
