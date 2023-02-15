import BooksList from "../../components/BooksList/BooksList";

const BooksPage = () => {
  document.title = "Book Bazaar - Books";
  return (
    <section className="books page-container">
      <article className="books__container">
        <BooksList />
      </article>
    </section>
  );
};

export default BooksPage;
