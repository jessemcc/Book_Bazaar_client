import "./CheckoutPage.scss";
import CheckoutItems from "../../components/CheckoutItems/CheckoutItems";
import { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [security, setSecurity] = useState("");

  return (
    <section className="checkout">
      <h1 className="checkout__title">CHECKOUT</h1>
      <article className="checkout__container">
        <h2 className="checkout__title">YOUR CART</h2>
        <CheckoutItems />
      </article>
      <article className="checkout__form-container">
        <h2 className="checkout__title">SHIPPING INFORMATION</h2>
        <form className="checkout__form">
          <label name="firstName" className="checkout__label">
            FIRST NAME
            <input
              type="text"
              name="firstName"
              className="checkout__input"
              placeholder="Insert First Name..."
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>
          <label name="lastName" className="checkout__label">
            LAST NAME
            <input
              type="text"
              name="lastName"
              className="checkout__input"
              placeholder="Insert First Name..."
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </label>
          <label name="address" className="checkout__label">
            STREET ADDRESS
            <input
              type="text"
              name="address"
              className="checkout__input"
              placeholder="Insert Address..."
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </label>
          <label name="city" className="checkout__label">
            CITY
            <input
              type="text"
              name="city"
              className="checkout__input"
              placeholder="Insert City..."
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </label>
          <label name="province" className="checkout__label">
            PROVINCE
            <input
              type="text"
              name="province"
              className="checkout__input"
              placeholder="Insert Province..."
              value={province}
              onChange={(e) => {
                setProvince(e.target.value);
              }}
            />
          </label>
          <label name="postal" className="checkout__label">
            POSTAL CODE
            <input
              type="text"
              name="postal"
              className="checkout__input"
              placeholder="Insert Postal Code..."
              value={postal}
              onChange={(e) => {
                setPostal(e.target.value);
              }}
            />
          </label>
          <h2 className="checkout__title">PAYMENT INFORMATION</h2>
          <label name="card-name" className="checkout__label">
            NAME ON CARD
            <input
              type="text"
              name="card-name"
              className="checkout__input"
              placeholder="Insert credit card name..."
              value={cardName}
              onChange={(e) => {
                setCardName(e.target.value);
              }}
            />
          </label>
          <label name="card-number" className="checkout__label">
            CREDIT CARD NUMBER
            <input
              type="text"
              name="card-number"
              className="checkout__input"
              placeholder="Insert credit card number..."
              value={cardNumber}
              onChange={(e) => {
                setCardNumber(e.target.value);
              }}
            />
          </label>
          <label name="expires" className="checkout__label">
            EXPIRY DATE <br /> Month{" "}
            <select
              className="checkout__select"
              name="month"
              onChange={(e) => {
                setExpMonth(e.target.value);
              }}
              value={expMonth}
            >
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>{" "}
            Year{" "}
            <select
              name="year"
              className="checkout__select"
              onChange={(e) => {
                setExpYear(e.target.value);
              }}
              value={expYear}
            >
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
            </select>
          </label>
          <label name="security" className="checkout__label">
            SECURITY NUMBER
            <input
              type="text"
              name="security"
              className="checkout__input"
              placeholder="Insert security number..."
              value={security}
              onChange={(e) => {
                setSecurity(e.target.value);
              }}
            />
          </label>
          <Link to="/success" className="checkout__button">
            COMPLETE PURCHASE
          </Link>
        </form>
      </article>
    </section>
  );
};

export default CheckoutPage;
