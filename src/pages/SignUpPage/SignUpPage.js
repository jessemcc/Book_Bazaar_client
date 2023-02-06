// import LoginPage from "../LoginPage/LoginPage";
import tempImg from "../../assets/images/authors/temp_dp.jpg";
import { useEffect, useState } from "react";

const SignUpPage = () => {
  const [displayImage, setDisplayImage] = useState(null);

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    setDisplayImage(e.target.files[0]);
  };

  return (
    <section className="signup">
      <section className="signup__container">
        <form action="" className="signup__form">
          <label name="first-name" className="signup__label">
            First Name:
            <input
              type="text"
              name="first-name"
              className="signup__input"
              placeholder="Insert First Name..."
            />
          </label>
          <label name="last-name" className="signup__label">
            Last Name:
            <input
              type="text"
              name="last-name"
              className="signup__input"
              placeholder="Insert Last Name..."
            />
          </label>
          <label name="user-name" className="signup__label">
            Username:
            <input
              type="text"
              name="user-name"
              className="signup__input"
              placeholder="Insert Username..."
            />
          </label>
          <label name="password" className="signup__label">
            Password:
            <input
              type="password"
              name="password"
              className="signup__input"
              placeholder="Insert Password..."
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
            First Name:
            <input
              type="email"
              name="email"
              className="signup__input"
              placeholder="Insert Email..."
            />
          </label>
          <label name="address" className="signup__label">
            Street Address:
            <input
              type="text"
              name="address"
              className="signup__input"
              placeholder="Insert Address..."
            />
          </label>
          <label name="city" className="signup__label">
            City:
            <input
              type="text"
              name="city"
              className="signup__input"
              placeholder="Insert City..."
            />
          </label>
          <label name="province" className="signup__label">
            Province:
            <input
              type="text"
              name="province"
              className="signup__input"
              placeholder="Insert Province..."
            />
          </label>
          <label name="postal-code" className="signup__label">
            Postal Code:
            <input
              type="text"
              name="postal-code"
              className="signup__input"
              placeholder="Insert Postal Code..."
            />
          </label>
          <label name="display-picture" className="signup__label">
            Upload Display Picture:
            <input
              type="file"
              name="display-picture"
              className="signup__input"
              onChange={handleImageUpload}
            />
            <img
              src={displayImage}
              alt="Display Picture"
              className="signup__display-picture"
            />
          </label>
        </form>
      </section>
    </section>
  );
};

export default SignUpPage;
