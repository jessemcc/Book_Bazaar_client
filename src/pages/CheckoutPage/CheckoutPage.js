import "./CheckoutPage.scss";
import CheckoutItems from "../../components/CheckoutItems/CheckoutItems";
import { useState, useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const CheckoutPage = () => {
  document.title = "Book Bazaar - Checkout";
  const [cart, setCart] = useState([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);
  const [deletedId, setDeletedId] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [isClientSecretSet, setIsClientSecretSet] = useState(false);
  const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

  // GET ALL CART ITEMS =======================================================
  useEffect(() => {
    try {
      const getCartItems = async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/cart`
        );
        setCart(data);
        setIsCartLoaded(true);
      };
      getCartItems();
    } catch (error) {
      console.error(error);
    }
  }, [deletedId]);

  if (!cart) {
    <p>Loading...</p>;
  }

  //STRIPE ================================================================

  useEffect(() => {
    if (isCartLoaded && cart.length > 0) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
          cart,
        })
        .then((response) => {
          setClientSecret(response.data.clientSecret);
          setIsClientSecretSet(true);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isCartLoaded, cart]);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };
  // GET TOTAL PRICE OF ALL CART ITEMS TOGETHER ===================================
  const getTotalPrice = (arr) => {
    let currentTotal = 0;
    arr.map((item) => {
      currentTotal += item.price;
      return null;
    });
    return currentTotal.toFixed(2);
  };
  const currentTotal = getTotalPrice(cart);

  // DELETE CART ITEM ============================================================
  const handleDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/cart`, {
      data: { id },
    });
    setDeletedId(id);
  };

  return (
    <section className="checkout page-container">
      <h1 className="checkout__title">CHECKOUT</h1>
      <article className="checkout__container">
        <h2 className="checkout__title">YOUR CART</h2>
        <CheckoutItems
          cart={cart}
          setCart={setCart}
          handleDelete={handleDelete}
          currentTotal={currentTotal}
        />
      </article>
      <article className="checkout__form-container">
        {clientSecret && isClientSecretSet && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </article>
    </section>
  );
};

export default CheckoutPage;
