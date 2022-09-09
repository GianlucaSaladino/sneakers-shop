import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <p className="cart-count">0</p>
      <img
        class="cartImage"
        src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
        alt="cart"
      />
    </div>
  );
};

export default Cart;
