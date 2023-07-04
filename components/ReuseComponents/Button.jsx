import React, { useState } from "react";

const Button = ({ text, color, icon, className}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${color ? color: "bg-button"} ${className}  text-white font-medium hover:scale-90 transition-all duration-500 rounded-[20px] px-6 py-4 flex justify-center items-center gap-[10px] shadow-md `}
    >
      <p>{icon}</p>

      <p>{text}</p>
    </button>
  );
};

export default Button;
