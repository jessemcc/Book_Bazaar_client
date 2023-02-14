import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./DeleteAccount.scss";

const DeleteAccount = ({ setIsLoggedIn }) => {
  const { REACT_APP_API_URL } = process.env;
  const { authorid } = useParams();
  const navigate = useNavigate();

  const deleteAccount = async () => {
    await axios.delete(`${REACT_APP_API_URL}/delete/${authorid}`);
    navigate("/");
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
  };
  return (
    <section className="delete-account">
      <article className="delete-account__container">
        <h1 className="delete-account__title">
          ARE YOU SURE YOU WISH TO DELETE YOUR ACCOUNT? THIS ACTION IS
          IRREVERSIBLE
        </h1>
        <div className="delete-account__buttons-container">
          <button onClick={deleteAccount} className="delete-account__button">
            DELETE
          </button>
          <button className="delete-account__button">CANCEL</button>
        </div>
      </article>
    </section>
  );
};

export default DeleteAccount;
