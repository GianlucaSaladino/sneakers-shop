import "./Cart.css";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="cart-text">Tu Compra:</h1>
        <Link to="/sneakers">
          <button className="btn btn-outline-dark">Ir a Comprar</button>
        </Link>
      </div>
    );
  }
};

export default Cart;
