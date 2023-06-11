import React, { useContext } from "react";
import { CartItem } from "../components/CartItem/CartItem";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  // Display cart items
  const cartItems = cart.map((item) => <CartItem key={item.id} item={item} />);

  return (
    <div className=" flex flex-col items-center mt-14 mb-auto">
      <Link to={"/"}>Home</Link>
      <h1 className=" text-3xl font-semibold mb-8">Cart</h1>
      <div className=" flex flex-col gap-5 w-4/5 mb-10">{cartItems}</div>
    </div>
  );
};
