import "./Item.css";
import React from "react";
import { Link } from "react-router-dom";


const Item = ({ item }) => {
  return (
    <Link
      style={{ color: "#000", textDecoration: "none" }}
      className="itemInfo"
      to={`/item/${item.id}`}
    >
      <img className="itemImage" src={item.productImage} alt="" />
      <p>{item.productName}</p>
    </Link>
  );
};

export default Item;
