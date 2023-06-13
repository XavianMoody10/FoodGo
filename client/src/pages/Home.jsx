import React, { useEffect, useRef, useState } from "react";
import Cartoon from "../assets/cartoon.png";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { burgers } from "../data/burgers.data";
import { pizza } from "../data/pizza.data";
import { FoodOption } from "../components/FoodOption/FoodOption";
import { desert } from "../data/desert.data";
import { fruits } from "../data/fruit.data";
import { CartIcon } from "../components/CartIcon/CartIcon";
import { CartMessage } from "../components/CartMessage/CartMessage";
import { CartMessages } from "../features/CartMessages/CartMessages";
import { v4 as uuidv4 } from "uuid";

export const Home = () => {
  const [active, setActive] = useState(0);
  const menuTabs = ["All", "Burger", "Pizza", "Desert", "Fruit"];
  const allFood = [...burgers, ...pizza, ...desert, ...fruits];
  const [clickMessages, setClickMessages] = useState([]);
  const [search, setSearch] = useState("");
  const menu = useRef();

  // Handler for displaying messages when user clicks a food option
  const displayMessage = () => {
    setClickMessages((prev) => [...prev, uuidv4()]);
  };

  // clear setClickMessages state after 5 seconds
  useEffect(() => {
    const clearClickMessages = setTimeout(() => {
      setClickMessages([]);
    }, 5000);

    return () => clearTimeout(clearClickMessages);
  }, [clickMessages]);

  // Display CartMessages
  const messageMap = clickMessages.map((index) => {
    return <CartMessage key={index} clickMessages={clickMessages} />;
  });

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
  const allFoodOptions = allFood.map((option, index) => {
    if (option.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
      return (
        <FoodOption
          key={option.id}
          option={option}
          index={index}
          displayMessageHandler={displayMessage}
        />
      );
    }
  });

  const burgersOptionsOnly = burgers.map((option, index) => {
    if (option.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
      return (
        <FoodOption
          key={option.id}
          option={option}
          index={index}
          displayMessageHandler={displayMessage}
        />
      );
    }
  });

  const pizzaOptionsOnly = pizza.map((option, index) => {
    if (option.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
      return (
        <FoodOption
          key={option.id}
          option={option}
          index={index}
          displayMessageHandler={displayMessage}
        />
      );
    }
  });

  const desertOptionsOnly = desert.map((option, index) => {
    if (option.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
      return (
        <FoodOption
          key={option.id}
          option={option}
          index={index}
          displayMessageHandler={displayMessage}
        />
      );
    }
  });

  const fruitsOptionsOnly = fruits.map((option, index) => {
    if (option.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
      return (
        <FoodOption
          key={option.id}
          option={option}
          index={index}
          displayMessageHandler={displayMessage}
        />
      );
    }
  });

  return (
    <div className=" flex flex-col">
      <div className=" border-3 flex justify-center items-center min-h-screen gap-40">
        <CartMessages>{messageMap}</CartMessages>

        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className=" flex flex-col items-center gap-10"
        >
          <img
            src={Logo}
            alt="logo"
            className=" w-[350px] max-[1111px]:w-[550px] max-[634px]:w-[400px] max-[464px]:w-[300px] max-[341px]:w-[200px]"
          />
          <button
            className="bg-[#FF3B3B] px-5 py-1 text-white rounded-md hover:shadow-md max-[1111px]:w-60 max-[1111px]:py-3 max-[1111px]:text-2xl max-[341px]:text-xl max-[341px]:w-44"
            onClick={() => {
              menu.current.scrollIntoView();
            }}
          >
            Place Order
          </button>
        </motion.div>

        <motion.img
          initial={{ y: 2 }}
          animate={{ y: [-2, 2, -2, 2, -2, 2] }}
          transition={{
            stiffness: 10,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "linear",
            duration: 5,
          }}
          src={Cartoon}
          alt="cartoon"
          className=" w-[450px] max-[1111px]:hidden"
        />
      </div>

      <div className=" min-h-screen flex flex-col items-center" ref={menu}>
        <input
          type="text"
          role="search-bar"
          placeholder="Search Food"
          className=" border min-w-[480px] p-2 rounded-lg bg-white outline-none max-[589px]:min-w-[300px] max-[338px]:min-w-[200px]"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className=" flex items-center gap-10 mt-6 max-[589px]:flex-col">
          <ul className=" flex gap-9 font-semibold max-[448px]:flex-col max-[589px]:items-center">
            {menuTabOptions}
          </ul>

          <Link to={"cart"} role="cart-icon">
            <CartIcon />
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-7 my-20 max-[1183px]:grid-cols-3  max-[882px]:grid-cols-2 max-[589px]:grid-cols-1">
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
