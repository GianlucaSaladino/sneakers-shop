import React, { useEffect, useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubstract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="itemCount">
      <div className="itemCountBtn">
        <button onClick={handleSubstract}>-</button>
      </div>
      <div className="itemCountNumber">
        <span>{count}</span>
      </div>
      <div className="itemCountBtn">
        <button onClick={handleAdd}>+</button>
      </div>
      <div className="itemConfirm">
        <button className="buttonCart" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
