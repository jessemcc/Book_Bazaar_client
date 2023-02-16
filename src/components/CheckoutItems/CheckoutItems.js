import "./CheckoutItems.scss";

const CheckoutItems = ({ cart, handleDelete, currentTotal }) => {
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
