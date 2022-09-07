import { useState, useEffect } from "react";
import getFetch from "../../helper/helper";
import "./ItemDetail.css";
import { products } from "../../helper/helper";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);

  const getProduct = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find((item) => item.id === parseInt(id));
        resolve(product);
      }, 2000);
    });
  };

  useEffect(() => {
    getFetch.then((data) => {
      if (!productId) {
        setData(data);
      } else {
        getProduct(productId).then((data) => setData(data));
      }
    });
  }, [productId]);

  return (
    <div className="item-container">
      <div className="item-detail">
        <img src={data.img} alt="" />
        <h2>{data.name}</h2>
        <h3>${data.price}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
