import "./LoginPage.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { REACT_APP_API_URL } = process.env;

  const handleLogin = async (e) => {
    try {
      await axios
        .post(`${REACT_APP_API_URL}/login`, {
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem("jwtToken", res.data.token);
          alert("Successfully logged in.");
        });
    } catch (error) {
      console.error(error);
      alert("Incorrect email or password");
    }
  };

  return (
    <section className="login">
      <article className="login__container">
        <h1 className="login__title">LOGIN</h1>
        <form className="login__form" onSubmit={handleLogin}>
          <label className="login__label" name="email">
            <input
              placeholder="Insert email here..."
              type="email"
              name="email"
              className="login__input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label name="password" className="login__label">
            <input
              placeholder="Insert password here..."
              type="password"
              name="password"
              className="login__input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <article className="login__buttons">
            <button type="submit" className="login__link">
              Login
            </button>
            <Link to="/signup" className="login__link">
              Sign Up
            </Link>
          </article>
        </form>
      </article>
    </section>
  );
};

export default LoginPage;
