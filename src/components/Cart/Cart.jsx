import "./Cart.css";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h1>Carrito vacío</h1>
        <Link to="/">
          <button>Seguir comprando</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {cart.map(product => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className="totalPrice">
        <p>Total: ${totalPrice()}</p>
      </div>
    </>
  );
};

export default Cart;
