import { useState } from "react";
import "./CheckoutPage.scss";

const CheckoutPage = (props) => {
  const { cart } = props;

  return (
    <section className="checkout">
      <article className="checkout__container">
        {cart.map((book, index) => (
          <p key={index}>{book.book_name}</p>
        ))}
      </article>
    </section>
  );
};

export default CheckoutPage;
