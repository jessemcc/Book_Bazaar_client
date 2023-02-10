import BookInfo from "../../components/BookInfo/BookInfo";
import "./SingleBookPage.scss";

const SingleBookPage = () => {
  return (
    <section className="book">
      <article className="book__container">
        <BookInfo />
      </article>
    </section>
  );
};

export default SingleBookPage;
