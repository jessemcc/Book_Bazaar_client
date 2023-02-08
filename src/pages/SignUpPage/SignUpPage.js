// import LoginPage from "../LoginPage/LoginPage";
import { useEffect, useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
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
    fd.append("portrait", portrait, portrait.name);
    console.log(fd);
    try {
      await axios.post(`${REACT_APP_API_URL}/signup`, {
        firstName,
        lastName,
        username,
        password,
        email,
        address,
        city,
        province,
        postal,
        about,
        fd,
      });
      console.log("POST sent");
    } catch (error) {
      console.error(`YOU FUCKED UP: ${error}`);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signUpUser();
  };

  return (
    <section className="signup">
      <section className="signup__container">
        <form onSubmit={submitHandler} className="signup__form">
          <label name="firstName" className="signup__label">
            First Name:
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
            Last Name:
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
          <label name="username" className="signup__label">
            Username:
            <input
              type="text"
              name="username"
              className="signup__input"
              placeholder="Insert Username..."
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <label name="password" className="signup__label">
            Password:
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
            Confirm Password:
            <input
              type="password"
              name="confirm-password"
              className="signup__input"
              placeholder="Insert Password..."
            />
          </label>
          <label name="email" className="signup__label">
            Email:
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
            Street Address:
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
            City:
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
            Province:
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
            Postal Code:
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
          <label name="about" className="signup__label">
            About me:
            <textarea
              name="about"
              className="signup__input"
              placeholder="Tell us about yourself..."
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />
          </label>
          <label name="portrait" className="signup__label">
            Upload Display Picture:
            <input
              type="file"
              name="portrait"
              className="signup__input"
              onChange={handleImageUpload}
            />
            <img
              src={portrait}
              alt="Display Picture"
              className="signup__display-picture"
            />
          </label>
          <button type="submit" className="signup__submit">
            Sign Up
          </button>
        </form>
      </section>
    </section>
  );
};

export default SignUpPage;
