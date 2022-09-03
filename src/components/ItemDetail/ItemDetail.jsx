import { useState, useEffect } from 'react'
import getFetch from '../../helper/helper'
import './ItemDetail.css'

const ItemDetail = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getFetch.then((response) => {
      setData(response.find((prod) => prod.id === 1));
    });
  }, []);

  console.log(data);
  return (
    <div className="item-container">
      <h1>Item Detail Container</h1>
      <div className="item-detail">
        <img src={data.img} alt="" />
        <h2>{data.name}</h2>
        <h3>{data.price}</h3>

        <div className="detail">
          <h4>{data.type}</h4>
          <p>{data.category}</p>
        </div>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
