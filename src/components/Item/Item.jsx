import "./Item.css";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <Link
      style={{ color: "#000", textDecoration: "none" }}
      className="itemInfo"
      to={`/item/${info.productId}`}
    >
      <img className="itemImage" src={info.productImage} alt="" />
      <p>{info.productName}</p>
    </Link>
  );
};

export default Item;
