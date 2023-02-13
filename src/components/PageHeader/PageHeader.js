import logo from "../../assets/logo/Book_bazaar_header.png";
import "./PageHeader.scss";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const PageHeader = () => {
  const [authorName, setAuthorName] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const jwtToken = localStorage.getItem("jwtToken");

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (jwtToken) {
      const decodedToken = jwtDecode(jwtToken, "happy123");
      setAuthorName(decodedToken.name);
      setAuthorId(decodedToken.id);
      setIsLoggedIn(true);
    }
  }, [jwtToken]);

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
        {isLoggedIn ? (
          <article className="header__loggedin-container">
            <Link to="/checkout" className="header__shopping-cart-link">
              <HiShoppingCart />
            </Link>
            <Link
              to={`/authors/${authorId}`}
              className="header__link header__author-name"
            >
              {authorName.toUpperCase()}
            </Link>
            <Link to="/" onClick={handleLogout} className="header__link">
              LOGOUT
            </Link>
          </article>
        ) : (
          <article className="header__signup-container">
            <Link to="/checkout" className="header__shopping-cart-link">
              <HiShoppingCart />
            </Link>
            <Link to="/signup" className="header__link">
              SIGN UP
            </Link>
            <Link to="/login" className="header__link">
              LOGIN
            </Link>
          </article>
        )}
      </section>
    </section>
  );
};

export default PageHeader;
