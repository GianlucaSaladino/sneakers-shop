import React, { useState, useContext } from "react";
const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, newQuantity) => {
    const { quantity = 0 } = cart.find((item) => item.id === item.id) || {};
    const newCart = cart.filter((item) => item.id !== item.id);
    setCart([...newCart, { ...item, quantity: quantity + newQuantity }]);
  };

  console.log("carrito: ", cart);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find((product) => product.id === id);

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  const totalProducts = () =>
  cart.reduce((acc, item) => acc + item.quantity, 0);

const totalPrice = () =>
  cart.reduce((acc, item) => acc + item.item.productPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeItem,
        addProduct,
        totalProducts,
        totalPrice,
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
