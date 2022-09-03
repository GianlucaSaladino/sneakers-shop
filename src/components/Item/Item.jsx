import React from 'react'
import './Item.css'

const Item = ({ data }) => {
  return (
    <>
      <div className="item" key={data.name}>
        <img src={data.img} alt="" />
        <h1>{data.name}</h1>
        <h2>${data.price}</h2>
      </div>
    </>
  );
};

export default Item;
