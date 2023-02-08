import "./Featured.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  const { REACT_APP_API_URL } = process.env;

  useEffect(() => {
    try {
      const getFeatured = async () => {
        const { data } = await axios.get(`${REACT_APP_API_URL}/books`);
        setFeatured(data);
      };
      getFeatured();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!featured) {
    return <p>Loading...</p>;
  }

  const selectFeatured = featured
    .sort((a, b) => 0.5 - Math.random())
    .splice(0, 3)
    .map((book) => {
      return (
        <Link to="/books/:bookid" key={book.id} className="featured-books">
          <h3 className="featured-books__featured-title">{book.book_name}</h3>
          <img
            src={REACT_APP_API_URL + book.cover_path}
            alt="book cover"
            className="featured-books__book-cover"
          />
          <h3 className="featured-books__featured-author">
            {`By: ${book.first_name} ${book.last_name}`}
          </h3>
          <h3 className="featured-books__featured-price">{book.price}</h3>
        </Link>
      );
    });

  return selectFeatured;
};

export default Featured;
