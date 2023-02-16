import { Link } from "react-router-dom";
import "./ProfileAuthor.scss";
import deleteIcon from "../../assets/icons/delete-icon.png";
import editIcon from "../../assets/icons/edit-icon.png";

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
    portrait_path,
    postal_code,
    province,
  } = data[0];

  return (
    <section className="profile-author" key={id}>
      <article className="profile-author__container">
        <img
          src={process.env.REACT_APP_API_URL + portrait_path}
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
          <Link to={`/upload/${id}`} className="profile-author__button button">
            UPLOAD NEW BOOK
          </Link>
          <div className="profile-author__edit-delete-container">
            <Link to={`/profile/${id}/edit/`} className="profile-author__link">
              <img
                src={editIcon}
                alt="edit icon"
                className="profile-author__icon"
              />
            </Link>
            <Link to={`/profile/${id}/delete`} className="profile-author__link">
              <img
                src={deleteIcon}
                alt="delete icon"
                className="profile-author__icon"
              />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProfileAuthor;
