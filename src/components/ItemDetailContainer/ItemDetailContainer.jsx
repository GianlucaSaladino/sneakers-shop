import React,{useState} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail";
import Counter from "../Counter/Counter";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [show, setShow] = useState(true);

  function onAdd(count) {
    console.log(`Se han agregado ${count} productos`);
    setShow(!show);
  }
  return (
    <div>
      <ItemDetail />
      <div className={show ? '' : 'inactive'}>
        <Counter stock={5} onAdd={onAdd} num={1} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
