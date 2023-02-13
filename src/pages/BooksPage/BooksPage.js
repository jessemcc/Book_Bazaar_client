import BooksList from "../../components/BooksList/BooksList";
import "./BooksPage.scss";

const BooksPage = () => {
  document.title = "Book Bazaar - Books";
  return (
    <section className="books">
      <article className="books__container">
        <BooksList />
      </article>
    </section>
  );
};

export default BooksPage;
