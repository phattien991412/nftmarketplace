import React from "react";

const Input = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        className="
          block
          rounded-[20px]
          px-6
          pt-6
          pb-1
          w-full
          text-md
        text-text
        bg-white
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
          invalid:border-b-1
          my-6
          "
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="
          absolute 
          text-md
        text-text
          duration-150 
          transform 
          -translate-y-3 
          scale-75 
          top-4 
          z-10 
          origin-[0] 
          left-6
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-3
        "
      >
        {label}
      </label>
    </div>
  );
};
export default Input;
