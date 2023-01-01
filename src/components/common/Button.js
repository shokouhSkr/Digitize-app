import React from "react";

const Button = ({ txtColor, bgColor, borderColor, children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full border-2 ${borderColor} items-center justify-center rounded-md ${bgColor} ${txtColor} p-2 md:hidden`}
    >
      {children}
    </button>
  );
};

export default Button;
