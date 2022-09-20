import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import products from "../Database//Database";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });

    getItem.then((result) => {
      setItem(result.find((sneaker) => sneaker.productId === parseInt(id)));
    });
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
