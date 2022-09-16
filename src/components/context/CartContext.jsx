import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const UseCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    const newCart = cart.filter((prod) => prod.item.id !== item.id);
    newCart.push({ item, quantity });
    setCart(newCart);
  };

  console.log(cart);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find((item) => item.id === id);

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
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
