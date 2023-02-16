import "./Featured.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Featured = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    try {
      const getFeatured = async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/books`
        );
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
        <Link
          to={`/books/${book.id}`}
          key={book.id}
          className="featured-books box-container"
        >
          <h3 className="featured-books__featured-title">{book.book_name}</h3>
          <div className="featured-books__book-cover-container">
            <img
              src={process.env.REACT_APP_API_URL + book.cover_path}
              alt="book cover"
              className="featured-books__book-cover"
            />
          </div>
          <h3 className="featured-books__featured-author">
            {`By: ${book.first_name} ${book.last_name}`}
          </h3>
          <h3 className="featured-books__featured-price">{`${book.price}$`}</h3>
        </Link>
      );
    });

  return selectFeatured;
};

export default Featured;
