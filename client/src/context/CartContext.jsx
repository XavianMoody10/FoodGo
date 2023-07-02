// MyContext.js
import React, { createContext, useEffect, useState } from "react";

// Create a new context
export const CartContext = createContext();

// Create a provider component
export const CartContextProvider = ({ children }) => {
  const localCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(JSON.parse(localCart) || []);

  const increaseItemQuantity = (option) => {
    const deepClone = JSON.parse(JSON.stringify(cart));
    const itemIndex = deepClone.findIndex((item) => item.id === option.id);
    const singlePrice = deepClone[itemIndex].price / deepClone[itemIndex].qty;

    deepClone[itemIndex].qty = deepClone[itemIndex].qty + 1;
    deepClone[itemIndex].price = deepClone[itemIndex].price + singlePrice;

    localStorage.setItem("cart", JSON.stringify(deepClone));
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
      localStorage.setItem("cart", JSON.stringify(deepClone));
      setCart(deepClone);
    }
  };

  const removeItem = (option) => {
    const updatedCart = cart.filter((item) => item.id !== option.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const addItem = (item) => {
    const deepClone = JSON.parse(JSON.stringify(cart));
    const exist = deepClone.filter(({ id }) => id === item.id);
    const newItem = { ...item, qty: 1 };

    if (exist.length) {
      increaseItemQuantity(item);
    } else {
      localStorage.setItem("cart", JSON.stringify([...deepClone, newItem]));
      setCart([...deepClone, newItem]);
    }
  };

  // Provide the context values and functions to the children components
  return (
    <CartContext.Provider
      value={{
        cart,
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
