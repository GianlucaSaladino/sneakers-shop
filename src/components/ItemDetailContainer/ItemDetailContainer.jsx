import "./ItemDetailContainer.css";

import React, { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ItemDetailContainer = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    // console.log(`Se han agregado ${count} productos`);
    setGoToCart(true);
    addProduct(data, quantity);
  };
  return (
    <div>
      <ItemDetail />
      <div className="goCart">
        {goToCart ? (
          <Link className="linkCart" to="/cart">
            Finalizar compra
          </Link>
        ) : (
          <Counter stock={5} onAdd={onAdd} num={1} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
