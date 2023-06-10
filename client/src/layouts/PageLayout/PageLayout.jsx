import React from "react";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-between bg-[#F8F8F8]">
      <div className=" w-full h-[70px] bg-[#FF3B3B]"></div>
      <Outlet></Outlet>
      <div className=" w-full h-[70px] p-5 bg-black"></div>
    </div>
  );
};
