import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    const isInCart = cart.find((product) => product.id === item.id);
    if (isInCart) {
      isInCart.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  }

  // console.log("carrito: ", cart);

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    cart.find((product) => product.id === id) ? true : false;
  };

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const totalProducts = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, product) => acc + product.productPrice * product.quantity, 0);
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
