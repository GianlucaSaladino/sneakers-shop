import React, { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Counter from "../Counter/Counter";
import "./ItemDetailContainer.css";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const [goToCart, setGoToCart] = useState(false);

  function onAdd(count) {
    console.log(`Se han agregado ${count} productos`);
    setGoToCart(true);
  }
  return (
    <div>
      <ItemDetail />
      <div className="goCart">
        {goToCart ? (
          <Link className="linkCart" to="/cart">Finalizar compra</Link>
        ) : (
          <Counter stock={5} onAdd={onAdd} num={1} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
