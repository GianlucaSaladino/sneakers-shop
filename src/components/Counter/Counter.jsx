import { useState } from "react";
import "./Counter.css";

const Counter = ({ stock, onAdd, num }) => {
  const [count, setCount] = useState(num);

  function add() {
    if (count < stock) {
      setCount(count + num);
    }
  }

  function substract() {
    if (count >= num) {
      setCount(count - num);
    }
  }

  function reset() {
    setCount(num);
  }

  return (
    <div className="counter-container">
      <div className="counter-box">
        <p>Stock: {stock} </p>
        <p>Cantidad: {count} </p>

        <div>
          <button className="counter-button" onClick={substract}>
            {" "}
            -{" "}
          </button>
          <button className="counter-button" onClick={reset}>
            {" "}
            Reset{" "}
          </button>
          <button className="counter-button" onClick={add}>
            {" "}
            +{" "}
          </button>
        </div>
        <div>
          <button className="counter-button" onClick={() => onAdd(count)}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
