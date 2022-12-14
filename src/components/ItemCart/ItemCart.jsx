import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct, substractProduct, addOneProduct } = useCartContext();
  return (
    <div className="itemCart">
      <div className="itemImage">
        <img src={product.productImage} alt="" />
      </div>
        <p>{product.productName}</p>
        <p>${product.productPrice}</p>
        <p>Cantidad: {product.quantity}</p>
      <div className="itemCartButtons">
        <button onClick={() => addOneProduct(product.id)}>Sumar</button>
        <button onClick={() => substractProduct(product.id)}>Restar</button>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;