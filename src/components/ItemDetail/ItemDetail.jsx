import React, { useState } from "react";
import styled from "styled-components";
import ItemCount from "../ItemCount/ItemCount";
import { UseCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const { addProduct } = UseCartContext();
  const onAdd = (cantidad) => {
    setCount(cantidad);
    console.log("se agregaron", cantidad, "productos");
    item.stock = item.stock - cantidad;
    setShow(!show);
    addProduct(item, cantidad);
  };
  console.log(count);
  return (
    <ItemDetailStyled>
      <div className="item-detail">
        <div className="item-detail-img">
          <img src={item.productImage} alt={item.productName} />
        </div>
        <div className="item-detail-content">
          <h2>{item.productName}</h2>
          <p>{item.productDescription}</p>
          <p>${item.productPrice}</p>
        </div>
        <div className={`item-detail-count ${show ? "" : "inactive"}`}>
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        </div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "10px",
              backgroundColor: "#000",
              borderRadius: "5px",
              fontSize: "20px",
            }}
            to="/cart"
            className={`item-detail-button ${show ? "inactive" : ""}`}
          >
            Ir al Carrito
          </Link>
        </div>
      </div>
    </ItemDetailStyled>
  );
}

export default ItemDetail;

const ItemDetailStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .item-detail {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .item-detail-img {
      width: 100%;
      height: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 500px;
        object-fit: cover;
        @media screen and (max-width: 768px) {
          width: 80%;
        }
      }
    }
    .item-detail-content {
      width: 100%;
      height: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media screen and (max-width: 768px) {
        width: 80%;
      }
      h2 {
        font-size: 2rem;
        margin-bottom: 10px;
      }
    }
    .inactive {
      display: none;
    }
  }
`;
