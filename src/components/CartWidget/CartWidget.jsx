import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <>
      <Link style={{ color: "#000", textDecoration: "none" }} to="/cart">
        <i className="bi bi-cart3"></i>
        <span>{totalProducts() || ""}</span>
      </Link>
    </>
  );
};

export default CartWidget;
