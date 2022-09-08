import { useState } from "react";
import "./Counter.css";

const Counter = ({ stock, onAdd, min, sum, res }) => {
  const [count, setCount] = useState(min);

  function add() {
    if (count < stock) {
      setCount(count + sum);
    }
  }

  function substract() {
    if (count >= min) {
      setCount(count - res);
    }
  }

  function reset() {
    setCount(min);
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
