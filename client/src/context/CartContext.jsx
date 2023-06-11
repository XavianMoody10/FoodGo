// MyContext.js
import React, { createContext, useState } from "react";

// Create a new context
export const CartContext = createContext();

// Create a provider component
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const increaseItemQuantity = (option) => {
    const itemIndex = cart.findIndex((item) => item.id === option.id);
    const updatedCart = cart.map(
      (item, index) =>
        index === itemIndex && {
          ...item,
          price: item.price + option.price,
          qty: item.qty + 1,
        }
    );

    setCart(updatedCart);
  };

  const decreaseItemQuantity = (option, cartItem) => {
    const itemIndex = cart.findIndex((item) => item.id === option.id);

    if (cartItem.qty === 1) {
      removeItem(cartItem);
    } else {
      const updatedCart = cart.map(
        (item, index) =>
          index === itemIndex && {
            ...item,
            price: item.price - option.price,
            qty: item.qty - 1,
          }
      );

      setCart(updatedCart);
    }
  };

  const removeItem = (option) => {
    const updatedCart = cart.filter((item) => item.id !== option.id);
    setCart(updatedCart);
  };

  const addItem = (item) => {
    const exist = cart.filter(({ id }) => id === item.id);

    if (exist.length) {
      increaseItemQuantity(item);
    } else {
      setCart((prev) => [...prev, { ...item, qty: 1 }]);
    }
  };

  // Provide the context values and functions to the children components
  return (
    <CartContext.Provider
      value={{
        cart: cart,
        decreaseItemQuantity,
        increaseItemQuantity,
        removeItem,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
