import React from "react";
import logo from "../assets/logo.png";
import { FormLabelInput } from "../components/FormLabelInput/FormLabelInput";
import { getCartFullPrice } from "../hooks/GetCartFullPrice";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className=" flex gap-52 items-center">
        <div className=" flex flex-col items-center">
          <div className=" flex gap-2 w-full mb-3">
            <Link
              to={"/"}
              className=" w-full text-center border p-2 font-semibold hover:bg-black hover:text-white duration-150 rounded-md"
            >
              Go To Menu
            </Link>
            <Link
              to={"/cart"}
              className=" w-full text-center border p-2 font-semibold hover:bg-black hover:text-white duration-150 rounded-md"
            >
              Go To Cart
            </Link>
          </div>
          <img src={logo} alt="logo" className=" max-w-[400px]"></img>
        </div>

        <form action="POST" className=" flex flex-col gap-7 w-[300px]">
          <FormLabelInput name={"name"} inputType={"text"} />
          <FormLabelInput name={"Address"} inputType={"text"} />
          <FormLabelInput name={"Credit Card Number"} inputType={"text"} />

          <div className=" flex gap-4 items-start justify-between">
            <div className=" flex flex-col h-fit gap-2">
              <p className=" text-gray-400">Expiration Date</p>

              <div className=" flex gap-3">
                <input
                  type="text"
                  className=" border bg-[#D9D9D9] p-2 w-14 rounded-lg"
                />
                <div className=" h-[45px] border w-[3px] bg-slate-300 rounded-sm"></div>
                <input
                  type="text"
                  className=" border bg-[#D9D9D9] p-2 w-14 rounded-lg"
                />
              </div>
            </div>

            <div className=" flex flex-col gap-2">
              <label htmlFor="cvv" className=" text-gray-400">
                CVV
              </label>
              <input
                type="text"
                className=" w-20 h-[45px] bg-[#D9D9D9] rounded-lg pl-3"
                maxLength={4}
              />
            </div>
          </div>

          <div className=" flex justify-between items-center">
            <p className=" flex flex-col">
              Total Bill
              <strong>${getCartFullPrice()}</strong>
            </p>

            <button
              className=" bg-[#FF3B3B] hover:bg-red-500 text-white py-2 px-5 rounded-lg"
              onSubmit={(e) => e.defaultPrevented()}
            >
              Confirm Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
