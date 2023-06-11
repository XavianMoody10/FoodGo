import React, { useContext, useEffect } from "react";
import { CartItem } from "../components/CartItem/CartItem";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { TfiFaceSad as SadFaceIcon } from "react-icons/tfi";
import { AiFillHome as HomeIcon } from "react-icons/ai";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const tempNum = 2;

  const fullPrice = [...cart].reduce((acc, cur) => cur.price + acc, 0);

  useEffect(() => {
    console.log(fullPrice);
  });

  // Display cart items
  const cartItems = cart.map((item) => <CartItem key={item.id} item={item} />);

  return (
    <div className=" flex flex-col items-center mt-14 mb-auto">
      <div className=" flex w-3/5 relative mb-8">
        <Link to={"/"} className=" absolute">
          <HomeIcon className=" text-3xl" />
        </Link>

        <h1 className=" text-3xl font-semibold mx-auto">Cart</h1>
      </div>

      {cart.length ? (
        <div className=" w-3/5">
          <div className=" flex flex-col gap-5 w-full mb-10">{cartItems}</div>
          <div className=" w-full text-lg flex justify-between mb-3">
            <p>
              Full Price:
              <strong> ${parseFloat(fullPrice.toFixed(2))}</strong>
            </p>

            <p>
              <strong>{cart.length}</strong> items(s)
            </p>
          </div>
          <button className=" w-full bg-red-500 text-white font-semibold p-3 rounded-md text-lg">
            Checkout
          </button>
        </div>
      ) : (
        <div className=" flex flex-col items-center justify-center gap-4 w-full h-[300px] mb-10 text-gray-400">
          <SadFaceIcon className=" text-8xl"></SadFaceIcon>
          <p className=" text-3xl">Cart Is Empty</p>
        </div>
      )}
    </div>
  );
};
