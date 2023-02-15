import { useState } from "react";
import BookInfo from "../../components/BookInfo/BookInfo";

const SingleBookPage = () => {
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <section className="book page-container">
      <article className="book__container">
        <BookInfo currentBook={currentBook} setCurrentBook={setCurrentBook} />
      </article>
    </section>
  );
};

export default SingleBookPage;
