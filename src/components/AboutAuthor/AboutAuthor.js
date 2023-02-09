import "./AboutAuthor.scss";

const AboutAuthor = ({ data }) => {
  console.log(data);
  const { about, first_name, last_name, id, portrait_path } = data[0];
  const { REACT_APP_API_URL } = process.env;

  return (
    <section className="about-author" key={id}>
      <article className="about-author__container">
        <img
          src={REACT_APP_API_URL + portrait_path}
          alt="portrait of author"
          className="about-author__portrait"
        />
        <div className="about-author__info-container">
          <h3 className="about-author__title">
            NAME:{" "}
            <span className="about-author__content">{`${first_name} ${last_name}`}</span>
          </h3>
          <h3 className="about-author__title">
            ABOUT: <span className="about-author__content">{about}</span>
          </h3>
        </div>
      </article>
    </section>
  );
};

export default AboutAuthor;
