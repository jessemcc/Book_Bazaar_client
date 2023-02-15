import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditBookPage.scss";

const EditBookPage = () => {
  const [bookName, setBookName] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [pageNumbers, setPageNumbers] = useState("");
  const [cover, setCover] = useState(null);
  const { REACT_APP_API_URL } = process.env;
  const { authorid, bookid } = useParams();
  const navigate = useNavigate();
  document.title = "Book Bazaar - Edit Book";

  const toProfile = () => {
    navigate(`/profile/${authorid}`);
  };

  const handleImageUpload = (e) => {
    setCover(e.target.files[0]);
  };

  useEffect(() => {
    try {
      const getBookInfo = async () => {
        const { data } = await axios.get(
          `${REACT_APP_API_URL}/books/${bookid}`
        );
        setBookName(data[0].book_name);
        setDescription(data[0].description);
        setLanguage(data[0].language);
        setGenre(data[0].genre);
        setPrice(data[0].price);
        setStock(data[0].stock);
        setPageNumbers(data[0].page_numbers);
      };
      getBookInfo();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const updateBook = async () => {
    const fd = new FormData();
    fd.append("author_id", authorid);
    fd.append("book_name", bookName);
    fd.append("description", description);
    fd.append("language", language);
    fd.append("genre", genre);
    fd.append("price", price);
    fd.append("stock", stock);
    fd.append("page_numbers", pageNumbers);
    fd.append("cover", cover);
    try {
      await axios.patch(
        `${REACT_APP_API_URL}/authors/${authorid}/${bookid}`,
        fd
      );
      console.log("Book has successfully been uploaded");
      alert("Book has successfully been uploaded");
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateBook();
    navigate(`/profile/${authorid}`);
  };

  return (
    <section className="edit-book page-container">
      <article className="edit-book__container box-container">
        <h1 className="edit-book__title">EDIT BOOK</h1>
        <form onSubmit={submitHandler} className="edit-book__form">
          <label name="bookName" className="edit-book__label">
            BOOK NAME
            <input
              type="text"
              name="bookName"
              className="edit-book__input"
              placeholder="Insert Book Name..."
              value={bookName}
              onChange={(e) => {
                setBookName(e.target.value);
              }}
            />
          </label>
          <label name="description" className="edit-book__textarea-label">
            DESCRIPTION
            <textarea
              name="bookName"
              className="edit-book__textarea"
              placeholder="Insert Book Description..."
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>
          <label name="language" className="edit-book__label">
            LANGUAGE
            <input
              type="text"
              name="language"
              className="edit-book__input"
              placeholder="Insert Book Language..."
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            />
          </label>
          <label name="genre" className="edit-book__label">
            GENRE
            <input
              type="text"
              name="genre"
              className="edit-book__input"
              placeholder="Insert Book Genre..."
              value={genre}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
          </label>
          <label name="price" className="edit-book__label">
            PRICE
            <input
              type="number"
              step=".01"
              name="price"
              className="edit-book__input"
              placeholder="Insert Book Price..."
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
          <label name="stock" className="edit-book__label">
            STOCK
            <input
              type="number"
              name="stock"
              className="edit-book__input"
              placeholder="Insert Book Stock..."
              value={stock}
              onChange={(e) => {
                setStock(e.target.value);
              }}
            />
          </label>
          <label name="pageNumbers" className="edit-book__label">
            PAGE NUMBERS
            <input
              type="number"
              name="pageNumbers"
              className="edit-book__input"
              placeholder="Insert Book Page Number..."
              value={pageNumbers}
              onChange={(e) => {
                setPageNumbers(e.target.value);
              }}
            />
          </label>
          <label name="cover" className="edit-book__label">
            BOOK COVER
            <input
              type="file"
              name="cover"
              className="edit-book__cover-image"
              onChange={handleImageUpload}
            />
          </label>
          <div className="edit-book__button-container button-container">
            <button type="submit" className="edit-book__button button">
              UPDATE BOOK
            </button>
            <button onClick={toProfile} className="edit-book__button button">
              CANCEL
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default EditBookPage;
