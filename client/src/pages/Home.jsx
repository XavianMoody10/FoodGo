import React, { useState } from "react";
import Cartoon from "../assets/cartoon.png";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { RiShoppingCart2Fill as CartIcon } from "react-icons/ri";
import { Link } from "react-router-dom";
import { burgers } from "../data/burgers.data";
import { pizza } from "../data/pizza.data";
import { FoodOption } from "../components/FoodOption/FoodOption";
import { desert } from "../data/desert.data";
import { fruits } from "../data/fruit.data";

export const Home = () => {
  const [active, setActive] = useState(0);
  const menuTabs = ["All", "Burger", "Pizza", "Desert", "Fruit"];
  const allFood = [...burgers, ...pizza, ...desert, ...fruits];

  // Display options tabs
  const menuTabOptions = menuTabs.map((option, index) => (
    <li
      key={option}
      className={
        active === index ? " text-red-500 cursor-pointer" : " cursor-pointer"
      }
      onClick={() => setActive(index)}
    >
      {option}
    </li>
  ));

  // Display food options
  const allFoodOptions = allFood.map((option, index) => (
    <FoodOption key={option.id} option={option} index={index}></FoodOption>
  ));

  const burgersOptionsOnly = burgers.map((option, index) => (
    <FoodOption key={option.id} option={option} index={index}></FoodOption>
  ));

  const pizzaOptionsOnly = pizza.map((option, index) => (
    <FoodOption key={option.id} option={option} index={index}></FoodOption>
  ));

  const desertOptionsOnly = desert.map((option, index) => (
    <FoodOption key={option.id} option={option} index={index}></FoodOption>
  ));

  const fruitsOptionsOnly = fruits.map((option, index) => (
    <FoodOption key={option.id} option={option} index={index}></FoodOption>
  ));

  return (
    <div className=" flex flex-col">
      <div className=" border-3 flex justify-center items-center min-h-screen gap-40">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className=" flex flex-col items-center gap-10"
        >
          <img src={Logo} alt="logo" className=" w-[350px]" />
          <button className="bg-[#FF3B3B] px-5 py-1 text-white rounded-md">
            Place Order
          </button>
        </motion.div>

        <motion.img
          initial={{ y: -2 }}
          animate={[{ y: [-2, 2, -2, 2, -2, 2] }]}
          transition={{
            stiffness: 10,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "linear",
            duration: 5,
          }}
          src={Cartoon}
          alt="cartoon"
          className=" w-[450px]"
        />
      </div>

      <div className=" min-h-screen flex flex-col items-center">
        <input
          type="text"
          placeholder="Search Food"
          className=" border min-w-[480px] p-2 rounded-lg bg-white outline-none"
        />

        <div className=" flex items-center gap-10 mt-6">
          <ul className=" flex gap-9 font-semibold">{menuTabOptions}</ul>

          <Link to={"cart"}>
            <div className=" relative">
              <span className=" absolute bottom-4 left-6">0</span>
              <CartIcon className=" text-2xl"></CartIcon>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-7 my-20">
          {active === 0 && allFoodOptions}
          {active === 1 && burgersOptionsOnly}
          {active === 2 && pizzaOptionsOnly}
          {active === 3 && desertOptionsOnly}
          {active === 4 && fruitsOptionsOnly}
        </div>
      </div>
    </div>
  );
};
