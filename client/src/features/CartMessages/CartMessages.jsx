import React from "react";

export const CartMessages = ({ children }) => {
  return (
    <div className=" h-fit fixed top-[100px] right-0 flex flex-col gap-5">
      {children}
    </div>
  );
};
