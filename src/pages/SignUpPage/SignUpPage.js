import "./SignUpPage.scss";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  document.title = "Book Bazaar - Sign Up";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");
  const [about, setAbout] = useState("");
  const [portrait, setPortrait] = useState(null);
  const { REACT_APP_API_URL } = process.env;
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    setPortrait(e.target.files[0]);
  };

  const signUpUser = async () => {
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
    try {
      await axios.post(`${REACT_APP_API_URL}/signup`, fd);
      console.log("POST sent");
      alert("You have successfully created your account");
    } catch (error) {
      console.error(`YOU MESSED UP: ${error}`);
    }
  };

  // FORM VALIDATION ===========================================================

  const postalCodeRegex = /^[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]$/;
  const canadianProvinces = [
    "ALBERTA",
    "BRITISH COLUMBIA",
    "MANITOBA",
    "NEW BRUNSWICK",
    "NEWFOUNDLAND AND LABRADOR",
    "NOVA SCOTIA",
    "ONTARIO",
    "PRINCE EDWARD ISLAND",
    "QUEBEC",
    "SASKATCHEWAN",
    "AB",
    "NL",
    "PE",
    "NS",
    "NB",
    "QC",
    "ON",
    "MB",
    "SK",
    "BC",
    "YT",
    "NT",
    "NU",
  ];

  const handleNameChange = (e, func) => {
    const name = e.target.value;
    const onlyLetters = /^[a-zA-Z]+$/;
    if (onlyLetters.test(name)) {
      func(name);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!postalCodeRegex.test(postal)) {
      alert(
        `Invalid Postal Code Format. Postal code example with no spaces: "A1A1A1"`
      );
      return;
    }
    if (!canadianProvinces.includes(province.toUpperCase())) {
      alert("Please enter a valid Canadian province with it's name in full.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (
      !firstName ||
      !lastName ||
      !password ||
      !email ||
      !address ||
      !city ||
      !about ||
      !portrait
    ) {
      alert("Please fill out all required fields");
      return;
    }
    signUpUser();
    navigate("/login");
  };

  // SIGN UP COMPONENT ==================================================================

  return (
    <section className="signup page-container">
      <section className="box-container">
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
                handleNameChange(e, setFirstName);
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
                handleNameChange(e, setLastName);
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
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
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
          <div className="button-container">
            <button type="submit" className="button">
              SIGN UP
            </button>
            <Link to="/login" className="button">
              LOGIN
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
};

export default SignUpPage;
