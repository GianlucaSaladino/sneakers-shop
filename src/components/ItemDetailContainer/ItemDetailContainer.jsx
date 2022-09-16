import React from "react";
import { products } from "../Database/Database";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();

  return (
    <div style={{ margin: "50px" }} className="item-detail-container">
      <ItemDetail item={products[id - 1]} />
    </div>
  );
}

export default ItemDetailContainer;
