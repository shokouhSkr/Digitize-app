import React from "react";
import { useCartContext } from "../store/context/cart_context";

const Badge = () => {
  const { totalItems } = useCartContext();

  return (
    <div
      className={`absolute ${
        totalItems === 1 ? "px-[9px]" : "px-2"
      } -top-1 right-5 flex items-center justify-center rounded-full bg-red-400 py-0.5 text-xs md:right-4 md:-top-2`}
    >
      <span className="inline-block pt-0.5 text-center text-slate-800">{totalItems}</span>
    </div>
  );
};

export default Badge;
