import "./Featured.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Featured = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    try {
      const getFeatured = async () => {
        const { data } = await axios.get("http://localhost:8080/books");
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

  console.log(featured);

  const selectFeatured = featured
    .sort((a, b) => 0.5 - Math.random())
    .splice(0, 3)
    .map((book) => {
      return (
        <article key={book.id} className="featured-books">
          <h3 className="featured-books__featured-title">{book.book_name}</h3>
          <img
            src={book.image}
            alt="book cover"
            className="featured-books__book-cover"
          />
          <h3 className="featured-books__featured-author">
            {`By: ${book.first_name} ${book.last_name}`}
          </h3>
          <h3 className="featured-books__featured-price">{book.price}</h3>
        </article>
      );
    });

  return selectFeatured;
};

export default Featured;
