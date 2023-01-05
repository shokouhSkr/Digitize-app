import React from "react";

const ShoppingButtons = () => {
  return (
    <div className="mb-20">
      <button
        type="button"
        className="mb-2 block w-full rounded bg-red-400 p-2 text-center text-white"
      >
        ادامه فرایند خرید
      </button>
      <button
        type="button"
        className="hidden w-full rounded border-2 border-red-400 bg-transparent p-1.5 text-center text-red-400 md:block"
      >
        انصراف از خرید
      </button>
    </div>
  );
};

export default ShoppingButtons;
