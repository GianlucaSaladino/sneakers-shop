import React from "react";
import "./CartNav.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function CartNav() {
  const { totalProducts } = useCartContext();

  return (
    <Link style={{ textDecoration: "none", color: "#000" }} to="/cart">
      <div className="cart-container">
        {/* <i className="bx bx-cart"></i>
        <p className="cart-count">0</p> */}
        <img
          class="cartImage"
          src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
          alt="cart"
        />

        <span>{totalProducts() || ""}</span>
      </div>
    </Link>
  );
}

export default CartNav;
