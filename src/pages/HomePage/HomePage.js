import "./HomePage.scss";
import Featured from "../../components/Featured/Featured";

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
        <article className="home__book-list"></article>
      </section>
    </section>
  );
};

export default HomePage;
