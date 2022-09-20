import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(item, cantidad);
  };

  return (
    <>
      <div className="itemDetail">
        <h1>{item.productName}</h1>
        <img src={item.productImage} alt="" />
        <p>{item.productDescription}</p>
        <p>${item.productPrice}</p>
        {goToCart ? (
          <Link
            style={{ color: "#000", textDecoration: "none", fontSize: "30px" }}
            to="/cart"
          >
            Ir al carrito
          </Link>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </>
  );
};

export default ItemDetail;
