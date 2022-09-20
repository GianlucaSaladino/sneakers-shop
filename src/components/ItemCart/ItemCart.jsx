import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="itemCart">
      <img className="itemImage" src={product.item.productImage} alt="" />
      <div>
        <p>{product.item.productName}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio: ${product.item.productPrice}</p>
        <p>Subtotal: ${product.item.productPrice * product.quantity}</p>
        <div className="itemCartButtons">
          <button onClick={() => removeProduct(product.item.productId)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
