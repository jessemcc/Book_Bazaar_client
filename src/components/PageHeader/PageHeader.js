import "./PageHeader.scss";
import logo from "../../assets/logo/Book_bazaar_header.png";
import { Link } from "react-router-dom";
import AuthorsPage from "../../pages/AuthorsPage/AuthorsPage";
import BooksPage from "../../pages/BooksPage/BooksPage";
import HomePage from "../../pages/HomePage/HomePage";
import { HiShoppingCart } from "react-icons/hi";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

const PageHeader = () => {
  return (
    <section className="header">
      <section className="header__container">
        <article className="header__logo-link-container">
          <Link to={<HomePage />} className="header__logo-link">
            <img src={logo} alt="Book Bazaar logo" className="header__logo" />
          </Link>
          <article className="header__page-links">
            <Link to={<AuthorsPage />} className="header__link">
              Authors
            </Link>
            <Link to={<BooksPage />} className="header__link">
              Books
            </Link>
          </article>
        </article>
        <article className="header__signup-container">
          <Link to="#" classname="header__shopping-cart-link">
            <HiShoppingCart />
          </Link>
          <Link to={<SignUpPage />} className="header__link">
            Sign Up
          </Link>
          <Link to={<LoginPage />} className="header__link">
            Login
          </Link>
        </article>
      </section>
    </section>
  );
};

export default PageHeader;
