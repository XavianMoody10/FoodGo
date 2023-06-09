import React, { useContext } from "react";
import { CartItem } from "../components/CartItem/CartItem";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { TfiFaceSad as SadFaceIcon } from "react-icons/tfi";
import { AiFillHome as HomeIcon } from "react-icons/ai";
import { getCartFullPrice } from "../hooks/GetCartFullPrice";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  // Display cart items
  const cartItems = cart.map((item) => <CartItem key={item.id} item={item} />);

  return (
    <div className=" flex flex-col items-center mt-14 mb-auto">
      <div className=" flex w-3/5 relative mb-8 max-[1258px]:w-2/4">
        <Link to={"/"} className=" absolute">
          <HomeIcon className=" text-3xl" />
        </Link>

        <h1 className=" text-3xl font-semibold mx-auto">Cart</h1>
      </div>

      {cart.length ? (
        <div className=" w-3/5 mb-10 max-[546px]:w-4/5">
          <div className=" flex flex-col gap-5 w-full mb-10 max-[1258px]:w-fit max-[1258px]:grid max-[1258px]:grid-cols-2 max-[1258px]:m-auto max-[1094px]:grid-cols-1 max-[368px]:flex max-[368px]:flex-col">
            {cartItems}
          </div>
          <div className=" w-full text-lg flex justify-between mb-3 max-[546px]:flex-col max-[546px]:items-center max-[546px]:my-10">
            <p>
              Full Price:
              <strong> ${parseFloat(getCartFullPrice().toFixed(2))}</strong>
            </p>

            <p>
              <strong>{cart.length}</strong> Item(s)
            </p>
          </div>
          <button
            className=" w-full bg-[#FF3B3B] hover:bg-red-500 text-white font-semibold p-3 rounded-md text-lg"
            onClick={() => navigate("/checkout")}
          >
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
