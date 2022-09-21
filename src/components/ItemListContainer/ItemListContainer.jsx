import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { tipoProducto } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    
    if (tipoProducto) {
      const queryFilter = query(queryCollection, where("productCategory", "==", tipoProducto));
      getDocs(queryFilter)
      .then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
    }
    else {
      getDocs(queryCollection)
      .then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
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
