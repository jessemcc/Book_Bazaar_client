import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProfilePage.scss";

const EditProfilePage = () => {
  document.title = "Book Bazaar - Edit User";
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
  const { authorid } = useParams();

  const handleImageUpload = (e) => {
    setPortrait(e.target.files[0]);
  };

  useEffect(() => {
    try {
      const getUserInfo = async () => {
        const { data } = await axios.get(
          `${REACT_APP_API_URL}/authors/${authorid}`
        );
        setFirstName(data[0].first_name);
        setLastName(data[0].last_name);
        setPassword(data[0].password);
        setConfirmPassword(data[0].password);
        setEmail(data[0].email);
        setAddress(data[0].address);
        setCity(data[0].city);
        setProvince(data[0].province);
        setPostal(data[0].postal_code);
        setAbout(data[0].about);
      };
      getUserInfo();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const updateUser = async () => {
    const fd = new FormData();
    fd.append("first_name", firstName);
    fd.append("last_name", lastName);
    fd.append("password", password);
    fd.append("email", email);
    fd.append("address", address);
    fd.append("city", city);
    fd.append("province", province);
    fd.append("postal_code", postal);
    fd.append("about", about);
    fd.append("portrait", portrait);
    try {
      await axios.patch(`${REACT_APP_API_URL}/authors/${authorid}`, fd);
      console.log("Updated User");
      alert("You have successfully edited your account");
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
    updateUser();
    navigate(`/profile/${authorid}`);
  };

  return (
    <section className="edit-profile">
      <article className="edit-profile__container">
        <form onSubmit={submitHandler} className="edit-profile__form">
          <label name="firstName" className="edit-profile__label">
            FIRST NAME
            <input
              type="text"
              name="firstName"
              className="edit-profile__input"
              placeholder="Insert First Name..."
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>
          <label name="lastName" className="edit-profile__label">
            LAST NAME
            <input
              type="text"
              name="lastName"
              className="edit-profile__input"
              placeholder="Insert Last Name..."
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </label>
          <label name="password" className="edit-profile__label">
            PASSWORD
            <input
              type="password"
              name="password"
              className="edit-profile__input"
              placeholder="Insert Password..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <label name="confirm-password" className="edit-profile__label">
            CONFIRM PASSWORD
            <input
              type="password"
              name="confirm-password"
              className="edit-profile__input"
              placeholder="Insert Password..."
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </label>
          <label name="email" className="edit-profile__label">
            EMAIL
            <input
              type="email"
              name="email"
              className="edit-profile__input"
              placeholder="Insert Email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label name="address" className="edit-profile__label">
            STREET ADDRESS
            <input
              type="text"
              name="address"
              className="edit-profile__input"
              placeholder="Insert Address..."
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </label>
          <label name="city" className="edit-profile__label">
            CITY
            <input
              type="text"
              name="city"
              className="edit-profile__input"
              placeholder="Insert City..."
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </label>
          <label name="province" className="edit-profile__label">
            PROVINCE
            <input
              type="text"
              name="province"
              className="edit-profile__input"
              placeholder="Insert Province..."
              value={province}
              onChange={(e) => {
                setProvince(e.target.value);
              }}
            />
          </label>
          <label name="postal" className="edit-profile__label">
            POSTAL CODE
            <input
              type="text"
              name="postal"
              className="edit-profile__input"
              placeholder="Insert Postal Code..."
              value={postal}
              onChange={(e) => {
                setPostal(e.target.value);
              }}
            />
          </label>
          <label name="about" className="edit-profile__textarea-label">
            ABOUT ME
            <textarea
              name="about"
              className="edit-profile__textarea"
              placeholder="Tell us about yourself..."
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />
          </label>
          <label name="portrait" className="edit-profile__label">
            UPLOAD DISPLAY PICTURE
            <input
              type="file"
              name="portrait"
              className="edit-profile__upload"
              onChange={handleImageUpload}
            />
          </label>
          <button className="edit-profile__button" type="submit">
            UPDATE PROFILE
          </button>
        </form>
      </article>
    </section>
  );
};

export default EditProfilePage;
