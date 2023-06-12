import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CartContext } from "../../context/CartContext";

export const FoodOption = ({ option, index, displayMessageHandler }) => {
  const { id, name, image, price } = option;
  const [loaded, isLoaded] = useState(false);
  const { addItem } = useContext(CartContext);

  return (
    <motion.div
      className=" flex flex-col justify-between items-center h-[300px] w-[250px] bg-white rounded-lg p-3 shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeInOut",
      }}
    >
      <LazyLoadImage
        src={image}
        alt="food"
        effect={loaded ? "" : "blur"}
        threshold={100}
        onLoad={() => isLoaded(true)}
        className=" h-36 w-full object-cover rounded-lg"
      />

      <p className=" text-sm font-semibold">{name}</p>
      <p className=" text-sm font-semibold">${price}</p>
      <button
        className=" border w-full p-1 text-white bg-[#FF3B3B] rounded-md hover:shadow-md"
        onClick={() => {
          addItem(option);
          displayMessageHandler(option);
        }}
      >
        Add To Cart
      </button>
    </motion.div>
  );
};
