import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShippingInfoPage.scss";

const ShippingInfoPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");
  const navigate = useNavigate();

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
    const onlyLetters = /^[a-zA-Z\s]+$/;
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
    if (!firstName || !lastName || !address || !city || !province || !postal) {
      alert("Please fill out all fields");
      return;
    }
    navigate("/success");
  };

  return (
    <section className="shipping page-container">
      <article className="shipping__form-container">
        <h2 className="shipping__title">SHIPPING INFORMATION</h2>
        <form className="shipping__form" onSubmit={submitHandler}>
          <label name="firstName" className="shipping__label">
            FIRST NAME
            <input
              type="text"
              name="firstName"
              className="shipping__input"
              placeholder="Insert First Name..."
              value={firstName}
              onChange={(e) => {
                handleNameChange(e, setFirstName);
              }}
            />
          </label>
          <label name="lastName" className="shipping__label">
            LAST NAME
            <input
              type="text"
              name="lastName"
              className="shipping__input"
              placeholder="Insert First Name..."
              value={lastName}
              onChange={(e) => {
                handleNameChange(e, setLastName);
              }}
            />
          </label>
          <label name="address" className="shipping__label">
            STREET ADDRESS
            <input
              type="text"
              name="address"
              className="shipping__input"
              placeholder="Insert Address..."
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </label>
          <label name="city" className="shipping__label">
            CITY
            <input
              type="text"
              name="city"
              className="shipping__input"
              placeholder="Insert City..."
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </label>
          <label name="province" className="shipping__label">
            PROVINCE
            <input
              type="text"
              name="province"
              className="shipping__input"
              placeholder="Insert Province..."
              value={province}
              onChange={(e) => {
                setProvince(e.target.value);
              }}
            />
          </label>
          <label name="postal" className="shipping__label">
            POSTAL CODE
            <input
              type="text"
              name="postal"
              className="shipping__input"
              placeholder="Insert Postal Code..."
              value={postal}
              onChange={(e) => {
                setPostal(e.target.value);
              }}
            />
          </label>
          <div className="button-container">
            <button className="button">SHIP NOW</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default ShippingInfoPage;
