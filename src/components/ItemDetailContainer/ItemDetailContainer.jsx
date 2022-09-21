import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", id);
    getDoc(queryDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;