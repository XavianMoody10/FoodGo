import React from "react";
import { FormInput } from "../FormInput/FormInput";

export const FormLabelInput = ({ name, inputType }) => {
  return (
    <div className=" flex flex-col gap-1">
      <label htmlFor={name} className=" text-gray-400">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <FormInput inputFor={name} inputType={inputType}></FormInput>
    </div>
  );
};
