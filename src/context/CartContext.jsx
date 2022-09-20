import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    const isInCart = cart.find((i) => i.item.productId === item.productId);
    if (isInCart) {
      isInCart.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  console.log("carrito: ", cart);

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    cart.find((product) => product.id === id) ? true : false;
  };

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.item.productId !== id));
  };

  const totalProducts = () => {
    return cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, product) => {
      return acc + product.item.productPrice * product.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
