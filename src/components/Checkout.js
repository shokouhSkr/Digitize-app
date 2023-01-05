import React from "react";
import { ShoppingButtons } from "../components";

const Checkout = () => {
  return (
    <section className="basis-2/5">
      <div className="mb-3 rounded-md bg-white p-3 text-sm">
        {/* mobile */}
        <div className="mb-5 flex flex-1 justify-between">
          <p>مجموع قیمت:</p>
          <p>23,340,000 تومان</p>
        </div>
        <button type="button" className="md:hidden">
          کد تخفیف دارید؟
        </button>

        {/* laptop */}
        <div className="mb-10 hidden md:block">
          <div className="mb-5 flex items-center justify-between">
            <p>کد تخفیف:</p>

            <form className="flex rounded-md">
              <input
                type="text"
                placeholder="123ABC"
                className="w-24 rounded-tr-md rounded-br-md border border-slate-800 text-center focus:outline-none"
              />
              <button
                type="button"
                className="rounded-tl-md rounded-bl-md bg-red-400 py-2 px-4 text-white"
              >
                تایید
              </button>
            </form>
          </div>

          <div className="flex justify-between">
            <p>تخفیف:</p>
            <p>25,000 تومان</p>
          </div>
        </div>
        <div className="hidden justify-between md:flex">
          <p>قیمت نهایی:</p>
          <p>2,850,0000 تومان</p>
        </div>
      </div>

      <ShoppingButtons />
    </section>
  );
};

export default Checkout;
