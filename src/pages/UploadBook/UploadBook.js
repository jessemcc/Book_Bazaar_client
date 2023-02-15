import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./UploadBook.scss";

const UploadBook = () => {
  const [bookName, setBookName] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [pageNumbers, setPageNumbers] = useState("");
  const [cover, setCover] = useState(null);
  const { REACT_APP_API_URL } = process.env;
  const { authorid } = useParams();
  const navigate = useNavigate();
  document.title = "Book Bazaar - Upload Book";

  const toProfile = () => {
    navigate(`/profile/${authorid}`);
  };

  const handleImageUpload = (e) => {
    setCover(e.target.files[0]);
  };

  const addNewBook = async () => {
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
      await axios.post(`${REACT_APP_API_URL}/authors/${authorid}`, fd);
      console.log("Book has successfully been uploaded");
      alert("Book has successfully been uploaded");
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !bookName ||
      !description ||
      !language ||
      !genre ||
      !price ||
      !stock ||
      !pageNumbers ||
      !cover
    ) {
      alert("Please fill out all required fields");
      return;
    }
    addNewBook();
    navigate(`/profile/${authorid}`);
  };

  return (
    <section className="upload-book">
      <article className="upload-book__container">
        <h1 className="upload-book__title">ADD NEW BOOK</h1>
        <form onSubmit={submitHandler} className="upload-book__form">
          <label name="bookName" className="upload-book__label">
            BOOK NAME
            <input
              type="text"
              name="bookName"
              className="upload-book__input"
              placeholder="Insert Book Name..."
              value={bookName}
              onChange={(e) => {
                setBookName(e.target.value);
              }}
            />
          </label>
          <label name="description" className="upload-book__textarea-label">
            DESCRIPTION
            <textarea
              name="bookName"
              className="upload-book__textarea"
              placeholder="Insert Book Description..."
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>
          <label name="language" className="upload-book__label">
            LANGUAGE
            <input
              type="text"
              name="language"
              className="upload-book__input"
              placeholder="Insert Book Language..."
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            />
          </label>
          <label name="genre" className="upload-book__label">
            GENRE
            <input
              type="text"
              name="genre"
              className="upload-book__input"
              placeholder="Insert Book Genre..."
              value={genre}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
          </label>
          <label name="price" className="upload-book__label">
            PRICE
            <input
              type="number"
              step=".01"
              name="price"
              className="upload-book__input"
              placeholder="Insert Book Price..."
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
          <label name="stock" className="upload-book__label">
            STOCK
            <input
              type="number"
              name="stock"
              className="upload-book__input"
              placeholder="Insert Book Stock..."
              value={stock}
              onChange={(e) => {
                setStock(e.target.value);
              }}
            />
          </label>
          <label name="pageNumbers" className="upload-book__label">
            PAGE NUMBERS
            <input
              type="number"
              name="pageNumbers"
              className="upload-book__input"
              placeholder="Insert Book Page Number..."
              value={pageNumbers}
              onChange={(e) => {
                setPageNumbers(e.target.value);
              }}
            />
          </label>
          <label name="cover" className="upload-book__label">
            BOOK COVER
            <input
              type="file"
              name="cover"
              className="upload-book__cover-image"
              onChange={handleImageUpload}
            />
          </label>
          <div className="upload-book__button-container">
            <button type="submit" className="upload-book__button">
              UPLOAD BOOK
            </button>
            <button onClick={toProfile} className="upload-book__button">
              CANCEL
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default UploadBook;
