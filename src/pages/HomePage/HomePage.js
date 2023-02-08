import "./HomePage.scss";
import Featured from "../../components/Featured/Featured";
import FeaturedBookList from "../../components/FeaturedBookList/FeaturedBookList";

const HomePage = () => {
  return (
    <section className="home">
      <section className="home__container">
        <article className="home__featured-container">
          <h1 className="home__featured-title">FEATURED</h1>
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
          <FeaturedBookList />
        </article>
      </section>
    </section>
  );
};

export default HomePage;
