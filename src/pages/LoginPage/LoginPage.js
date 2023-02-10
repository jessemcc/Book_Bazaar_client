import "./LoginPage.scss";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="login">
      <article className="login__container">
        <h1 className="login__title">LOGIN</h1>
        <label className="login__label" name="email">
          <input
            placeholder="Insert email here..."
            type="email"
            name="email"
            className="login__input"
          />
        </label>
        <label name="password" className="login__label">
          <input
            placeholder="Insert password here..."
            type="password"
            name="password"
            className="login__input"
          />
        </label>
        <article className="login__buttons">
          <Link to="/" className="login__link">
            Login
          </Link>
          <Link to="/signup" className="login__link">
            Sign Up
          </Link>
        </article>
      </article>
    </section>
  );
};

export default LoginPage;
