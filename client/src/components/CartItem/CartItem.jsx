import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { burgers } from "../../data/burgers.data";
import { pizza } from "../../data/pizza.data";
import { desert } from "../../data/desert.data";
import { fruits } from "../../data/fruit.data";

export const CartItem = ({ item }) => {
  const { id, name, image, price, qty } = item;
  const { decreaseItemQuantity, increaseItemQuantity, removeItem } =
    useContext(CartContext);
  const allFood = [...burgers, ...pizza, ...desert, ...fruits];
  const index = allFood.findIndex((item) => (item.id = id));

  return (
    <div className=" bg-white flex justify-between p-3 rounded-2xl">
      <div className=" flex gap-10">
        <img
          src={image}
          alt=""
          className=" h-36 w-56 object-cover rounded-lg"
        />

        <ul className=" flex flex-col gap-4 text-sm">
          <li>
            <span>Product: </span>
            <strong>{name}</strong>
          </li>
          <li>
            <span>Price: </span>
            <strong>${parseFloat(price.toFixed(2))}</strong>
          </li>
          <li>
            <span>Quantity: </span>
            <strong>{qty}</strong>
          </li>
        </ul>
      </div>

      <div className=" flex flex-col w-fit gap-2">
        <button
          className=" border px-9 py-2 rounded-md"
          onClick={() => increaseItemQuantity(allFood[index])}
        >
          Increase Quantity
        </button>

        <button
          className=" border px-9 py-2 rounded-md"
          onClick={() => decreaseItemQuantity(allFood[index], item)}
        >
          Decrease Quantity
        </button>

        <button
          className=" border px-9 py-2 rounded-md"
          onClick={() => removeItem(allFood[index])}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
