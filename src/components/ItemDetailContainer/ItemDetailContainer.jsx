import ItemDetail from "../ItemDetail/ItemDetail";
import Counter from "../Counter/Counter";

const ItemDetailContainer = () => {
  function onAdd(count) {
    alert(`Se han agregado ${count} productos`);
  }
  return (
    <div>
      <ItemDetail />
      <Counter stock={5} onAdd={onAdd} min={1} sum={1} res={1} />
    </div>
  );
};

export default ItemDetailContainer;
