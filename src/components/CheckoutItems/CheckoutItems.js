import "./CheckoutItems.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CheckoutItems = () => {
  const [cart, setCart] = useState([]);
  const [deletedId, setDeletedId] = useState(null);
  const { REACT_APP_API_URL } = process.env;

  // GET ALL CART ITEMS =======================================================
  useEffect(() => {
    try {
      const getCartItems = async () => {
        const { data } = await axios.get(`${REACT_APP_API_URL}/cart`);
        setCart(data);
      };
      getCartItems();
    } catch (error) {
      console.error(error);
    }
  }, [deletedId]);

  if (!cart) {
    <p>Loading...</p>;
  }

  // GET TOTAL PRICE OF ALL CART ITEMS TOGETHER ===================================
  const getTotalPrice = (arr) => {
    let currentTotal = 0;
    arr.map((item) => {
      currentTotal += item.price;
    });
    return currentTotal.toFixed(2);
  };
  const currentTotal = getTotalPrice(cart);

  // DELETE CART ITEM ============================================================
  const handleDelete = async (id) => {
    await axios.delete(`${REACT_APP_API_URL}/cart`, {
      data: { id },
    });
    setDeletedId(id);
  };

  const itemsList = cart.map((item) => {
    return (
      <section className="cart-item__container" key={item.id}>
        <article className="cart-item__book-title">
          <p className="cart-item__content">{item.book_name}</p>
        </article>
        <article className="cart-item__book-price">
          <p
            className="cart-item__delete"
            onClick={() => handleDelete(item.id)}
          >
            REMOVE
          </p>
          <p className="cart-item__content">{item.price}$</p>
        </article>
      </section>
    );
  });
  return (
    <section className="cart-item">
      {itemsList}
      <article className="cart-item__total-price">
        <h3 className="cart-item__title">{`TOTAL: ${currentTotal}$`}</h3>
      </article>
    </section>
  );
};

export default CheckoutItems;
