import React, { useEffect, useState } from "react";
import { CartIcon } from "../CartIcon/CartIcon";
import { motion } from "framer-motion";

export const CartMessage = ({ clickMessages }) => {
  const [cartMessage, setCartMessage] = useState(true);

  useEffect(() => {
    setTimeout(() => setCartMessage(false), 3000);
  }, [clickMessages]);

  return (
    <motion.div
      initial={{ right: "-100%" }}
      animate={{ right: cartMessage ? "3%" : "-100%" }}
      className=" border py-4 px-5 bg-green-600 text-white flex gap-5 rounded-xl relative right-[-100%]"
    >
      <CartIcon />
      <span>Added To Cart</span>
    </motion.div>
  );
};
