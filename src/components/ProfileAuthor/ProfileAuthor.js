import { Link } from "react-router-dom";
import "./ProfileAuthor.scss";

const ProfileAuthor = ({ data }) => {
  const {
    about,
    address,
    city,
    email,
    first_name,
    id,
    last_name,
    password,
    portrait,
    portrait_path,
    postal_code,
    province,
  } = data[0];
  const { REACT_APP_API_URL } = process.env;

  return (
    <section className="profile-author" key={id}>
      <article className="profile-author__container">
        <img
          src={REACT_APP_API_URL + portrait_path}
          alt="portrait of author"
          className="profile-author__portrait"
        />
        <div className="profile-author__info-container">
          <h3 className="profile-author__title">
            NAME:{" "}
            <span className="profile-author__content">{`${first_name} ${last_name}`}</span>
          </h3>
          <h3 className="profile-author__title">
            PASSWORD:{" "}
            <span className="profile-author__content">{`${password}`}</span>
          </h3>
          <h3 className="profile-author__title">
            ADDRESS:{" "}
            <span className="profile-author__content">{`${address}`}</span>
          </h3>
          <h3 className="profile-author__title">
            CITY: <span className="profile-author__content">{`${city}`}</span>
          </h3>
          <h3 className="profile-author__title">
            PROVINCE:{" "}
            <span className="profile-author__content">{`${province}`}</span>
          </h3>
          <h3 className="profile-author__title">
            POSTAL CODE:{" "}
            <span className="profile-author__content">{`${postal_code}`}</span>
          </h3>
          <h3 className="profile-author__title">
            EMAIL: <span className="profile-author__content">{`${email}`}</span>
          </h3>
          <h3 className="profile-author__title">
            ABOUT: <span className="profile-author__content">{about}</span>
          </h3>
          <Link to={`/upload/${id}`} className="profile-author__upload-book">
            UPLOAD NEW BOOK
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ProfileAuthor;
