import React from "react";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <div className="item" key={data.name}>
      <img src={data.img} alt="" />
      <h1 className="item-text">{data.name}</h1>
      <h2 className="item-text">${data.price}</h2>
    </div>
  );
};

export default Item;
