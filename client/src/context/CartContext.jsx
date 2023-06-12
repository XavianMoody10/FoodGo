// MyContext.js
import React, { createContext, useEffect, useState } from "react";

// Create a new context
export const CartContext = createContext();

// Create a provider component
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const increaseItemQuantity = (option) => {
    const deepClone = JSON.parse(JSON.stringify(cart));
    const itemIndex = deepClone.findIndex((item) => item.id === option.id);
    const singlePrice = deepClone[itemIndex].price / deepClone[itemIndex].qty;

    deepClone[itemIndex].qty = deepClone[itemIndex].qty + 1;
    deepClone[itemIndex].price = deepClone[itemIndex].price + singlePrice;

    setCart(deepClone);
  };

  const decreaseItemQuantity = (option) => {
    const deepClone = JSON.parse(JSON.stringify(cart));
    const itemIndex = deepClone.findIndex((item) => item.id === option.id);
    const singlePrice = deepClone[itemIndex].price / deepClone[itemIndex].qty;

    deepClone[itemIndex].qty = deepClone[itemIndex].qty - 1;
    deepClone[itemIndex].price = deepClone[itemIndex].price - singlePrice;

    if (deepClone[itemIndex].qty < 1) {
      removeItem(option);
    } else {
      setCart(deepClone);
    }
  };

  const removeItem = (option) => {
    const updatedCart = cart.filter((item) => item.id !== option.id);
    setCart(updatedCart);
  };

  const addItem = (item) => {
    const deepClone = JSON.parse(JSON.stringify(cart));
    const exist = deepClone.filter(({ id }) => id === item.id);
    const newItem = { ...item, qty: 1 };

    if (exist.length) {
      increaseItemQuantity(item);
    } else {
      setCart([...deepClone, newItem]);
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
