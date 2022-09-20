import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import products from "../Database//Database";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { tipoProducto } = useParams();

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
    if (tipoProducto) {
      getItems.then((result) => {
        setItems(
          result.filter((item) => item.productCategory === tipoProducto)
        );
      });
    } else {
      getItems.then((result) => {
        setItems(result);
      });
    }
  }, [tipoProducto]);

  return (
    <>
      <h1 className="title">Products:</h1>
      <div className="itemListContainer">
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
