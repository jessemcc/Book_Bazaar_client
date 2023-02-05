import "./HomePage.scss";
import Featured from "../../components/Featured/Featured";

const HomePage = () => {
  return (
    <section className="home">
      <section className="home__container">
        <article className="home__featured-container">
          <h1 className="home__featured-title">FEATURED</h1>
          <Featured />
        </article>
      </section>
    </section>
  );
};

export default HomePage;
