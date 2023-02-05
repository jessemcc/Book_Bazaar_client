import "./PageHeader.scss";
import logo from "../../assets/logo/Book_bazaar_header.png";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

const PageHeader = () => {
  return (
    <section className="header">
      <section className="header__container">
        <article className="header__logo-link-container">
          <Link to="/" className="header__logo-link">
            <img src={logo} alt="Book Bazaar logo" className="header__logo" />
          </Link>
          <article className="header__page-links">
            <Link to="/authors" className="header__link">
              AUTHORS
            </Link>
            <Link to="/books" className="header__link">
              BOOKS
            </Link>
          </article>
        </article>
        <article className="header__signup-container">
          <Link to="/shopping-cart" className="header__shopping-cart-link">
            <HiShoppingCart />
          </Link>
          <Link to="/signup" className="header__link">
            SIGN UP
          </Link>
          <Link to="/login" className="header__link">
            LOGIN
          </Link>
        </article>
      </section>
    </section>
  );
};

export default PageHeader;
