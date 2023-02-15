import "./HomePage.scss";
import Featured from "../../components/Featured/Featured";
import FeaturedBookList from "../../components/FeaturedBookList/FeaturedBookList";

const HomePage = ({ isLoggedIn }) => {
  document.title = "Book Bazaar - Home";
  return (
    <section className="home">
      <section className="home__container">
        <article className="home__featured-container">
          <h1 className="home__featured-title">FEATURED</h1>
          <h3 className="home__featured-about">
            Discover the next big thing in literature at Book Bazaar! Browse new
            and exciting books from up-and-coming authors, and support
            independent writers by buying directly from the source.
          </h3>
          <article className="home__featured-books">
            <Featured />
          </article>
        </article>
        <article className="home__book-list">
          <article className="home__book-list-titles">
            <h3 className="home__book-list-title">Title</h3>
            <h3 className="home__book-list-title">Author</h3>
            <h3 className="home__book-list-title">Genre</h3>
            <h3 className="home__book-list-price">Price</h3>
          </article>
          <FeaturedBookList isLoggedIn={isLoggedIn} />
        </article>
      </section>
    </section>
  );
};

export default HomePage;
