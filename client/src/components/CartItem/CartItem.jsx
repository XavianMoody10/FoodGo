import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { burgers } from "../../data/burgers.data";
import { pizza } from "../../data/pizza.data";
import { desert } from "../../data/desert.data";
import { fruits } from "../../data/fruit.data";
import numbro from "numbro";

export const CartItem = ({ item }) => {
  const { id, name, image, price, qty } = item;
  const { decreaseItemQuantity, increaseItemQuantity, removeItem } =
    useContext(CartContext);
  const allFood = [...burgers, ...pizza, ...desert, ...fruits];
  const index = allFood.findIndex((item) => (item.id = id));

  return (
    <div
      className=" bg-white flex justify-between p-3 rounded-2xl max-[1258px]:flex-col max-[1258px]:w-[300px] max-[1258px]:items-center max-[1258px]:gap-10 max-[368px]:w-fit"
      role="cart-item"
    >
      <div className=" flex gap-10 max-[1258px]:flex-col max-[1258px]:items-center">
        <img
          src={image}
          alt=""
          className=" h-36 w-56 object-cover rounded-lg"
        />

        <ul className=" flex flex-col gap-4 text-sm max-[1258px]:items-center">
          <li>
            <span>Product: </span>
            <strong>{name}</strong>
          </li>
          <li>
            <span>Price: </span>
            <strong>
              {numbro(price).formatCurrency({
                thousandSeparated: true,
                mantissa: 2,
              })}
            </strong>
          </li>
          <li>
            <span>Quantity: </span>
            <strong role="qty-number">{qty}</strong>
          </li>
        </ul>
      </div>

      <div className=" flex flex-col w-fit gap-2">
        <button
          className=" border px-9 py-2 rounded-md hover:bg-black hover:text-white duration-200"
          onClick={() => increaseItemQuantity(item)}
        >
          Increase Quantity
        </button>

        <button
          className=" border px-9 py-2 rounded-md hover:bg-black hover:text-white duration-200"
          onClick={() => decreaseItemQuantity(item)}
        >
          Decrease Quantity
        </button>

        <button
          className=" border px-9 py-2 rounded-md hover:bg-black hover:text-white duration-200"
          onClick={() => removeItem(allFood[index], item)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
