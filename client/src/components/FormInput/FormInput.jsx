import React from "react";

export const FormInput = ({ inputFor, inputType }) => {
  return (
    <input
      type={inputType}
      name={inputFor}
      className=" border bg-[#D9D9D9] p-2 w-full"
    />
  );
};
