// import LoginPage from "../LoginPage/LoginPage";
import "./SignUpPage.scss";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");
  const [about, setAbout] = useState("");
  const [portrait, setPortrait] = useState(null);

  const handleImageUpload = (e) => {
    setPortrait(e.target.files[0]);
  };

  const signUpUser = async () => {
    const { REACT_APP_API_URL } = process.env;
    console.log(portrait);
    const fd = new FormData();
    fd.append("firstName", firstName);
    fd.append("lastName", lastName);
    fd.append("password", password);
    fd.append("email", email);
    fd.append("address", address);
    fd.append("city", city);
    fd.append("province", province);
    fd.append("postal", postal);
    fd.append("about", about);
    fd.append("portrait", portrait);
    console.log(fd);
    try {
      await axios.post(`${REACT_APP_API_URL}/signup`, fd);
      console.log("POST sent");
    } catch (error) {
      console.error(`YOU MESSED UP: ${error}`);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signUpUser();
  };

  return (
    <section className="signup">
      <section className="signup__container">
        <h1 className="signup__title">SIGN UP</h1>
        <form onSubmit={submitHandler} className="signup__form">
          <label name="firstName" className="signup__label">
            FIRST NAME
            <input
              type="text"
              name="firstName"
              className="signup__input"
              placeholder="Insert First Name..."
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>
          <label name="lastName" className="signup__label">
            LAST NAME
            <input
              type="text"
              name="lastName"
              className="signup__input"
              placeholder="Insert Last Name..."
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </label>
          <label name="password" className="signup__label">
            PASSWORD
            <input
              type="password"
              name="password"
              className="signup__input"
              placeholder="Insert Password..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <label name="confirm-password" className="signup__label">
            CONFIRM PASSWORD
            <input
              type="password"
              name="confirm-password"
              className="signup__input"
              placeholder="Insert Password..."
            />
          </label>
          <label name="email" className="signup__label">
            EMAIL
            <input
              type="email"
              name="email"
              className="signup__input"
              placeholder="Insert Email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label name="address" className="signup__label">
            STREET ADDRESS
            <input
              type="text"
              name="address"
              className="signup__input"
              placeholder="Insert Address..."
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </label>
          <label name="city" className="signup__label">
            CITY
            <input
              type="text"
              name="city"
              className="signup__input"
              placeholder="Insert City..."
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </label>
          <label name="province" className="signup__label">
            PROVINCE
            <input
              type="text"
              name="province"
              className="signup__input"
              placeholder="Insert Province..."
              value={province}
              onChange={(e) => {
                setProvince(e.target.value);
              }}
            />
          </label>
          <label name="postal" className="signup__label">
            POSTAL CODE
            <input
              type="text"
              name="postal"
              className="signup__input"
              placeholder="Insert Postal Code..."
              value={postal}
              onChange={(e) => {
                setPostal(e.target.value);
              }}
            />
          </label>
          <label name="about" className="signup__textarea-label">
            ABOUT ME
            <textarea
              name="about"
              className="signup__textarea"
              placeholder="Tell us about yourself..."
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />
          </label>
          <label name="portrait" className="signup__label">
            UPLOAD DISPLAY PICTURE
            <input
              type="file"
              name="portrait"
              className="signup__upload"
              onChange={handleImageUpload}
            />
          </label>
          <div className="signup__buttons">
            <button type="submit" className="signup__button">
              SIGN UP
            </button>
            <Link to="login" className="signup__button">
              LOGIN
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
};

export default SignUpPage;
