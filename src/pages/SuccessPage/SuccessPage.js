import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SuccessPage.scss";

const SuccessPage = () => {
  document.title = "Book Bazaar - Success";

  useEffect(() => {
    try {
      const deleteCart = async () => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/delete`);
      };
      deleteCart();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <section className="success-page page-container">
      <article className="success-page__container">
        <h1 className="success-page__order-successful">
          YOUR ORDER WAS SUCCESSFULLY PLACED AND WILL ARIVE IN 5 TO 10 BUSINESS
          DAYS
        </h1>
      </article>
      <article className="success-page__link-container">
        <Link to="/" className="success-page__link">
          BACK TO HOME PAGE
        </Link>
      </article>
    </section>
  );
};

export default SuccessPage;
