import React, { useContext } from "react";
import { RiShoppingCart2Fill as Icon } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";

export const CartIcon = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className=" relative">
      <span className=" absolute bottom-4 left-6" role="cart-number">
        {cart.length}
      </span>
      <Icon className=" text-2xl" />
    </div>
  );
};
