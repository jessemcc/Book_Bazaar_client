import { useState } from "react";
import BookInfo from "../../components/BookInfo/BookInfo";
import "./SingleBookPage.scss";

const SingleBookPage = () => {
  const [currentBook, setCurrentBook] = useState(null);
  document.title = `Book Bazaar - ${currentBook[0].book_name}`;

  return (
    <section className="book">
      <article className="book__container">
        <BookInfo currentBook={currentBook} setCurrentBook={setCurrentBook} />
      </article>
    </section>
  );
};

export default SingleBookPage;
