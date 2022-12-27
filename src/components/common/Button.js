import React from "react";

const Button = ({ txtColor, bgColor, children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center rounded-md ${bgColor} ${txtColor} p-2 md:hidden`}
    >
      {children}
    </button>
  );
};

export default Button;
