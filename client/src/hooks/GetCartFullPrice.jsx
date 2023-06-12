import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const getCartFullPrice = () => {
  const { cart } = useContext(CartContext);

  const fullPrice = [...cart].reduce((acc, cur) => cur.price + acc, 0);

  return fullPrice;
};
