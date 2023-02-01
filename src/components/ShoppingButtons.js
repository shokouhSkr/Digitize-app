import React from "react";

const ShoppingButtons = () => {
  return (
    <div className="mb-20">
      <button
        type="button"
        className="fixed bottom-20 left-4 right-4 mb-3 block rounded bg-red-400 p-3.5 text-center text-white md:static md:w-full"
      >
        ادامه فرایند خرید
      </button>
      <button
        type="button"
        className="hidden w-full rounded border-2 border-red-400 bg-transparent p-2.5 text-center text-red-400 md:block"
      >
        انصراف از خرید
      </button>
    </div>
  );
};

export default ShoppingButtons;
