import "./AuthorsPage.scss";
import AuthorsList from "../../components/AuthorsList/AuthorsList";

const AuthorsPage = () => {
  document.title = "Book Bazaar - Authors";
  return (
    <section className="authors">
      <section className="authors__container">
        <AuthorsList />
      </section>
    </section>
  );
};

export default AuthorsPage;
