import React from "react";
import { ShoppingButtons } from "../components";

const Checkout = () => {
  return (
    <section className="mt-[53px] basis-2/5">
      <div className="fixed bottom-[135px] left-4 right-4 mb-6 rounded-md bg-[#ffffffea] p-5 text-sm md:static md:mt-0 md:bg-white md:p-8">
        {/* mobile */}
        <div className="mb-5 flex flex-1 justify-between">
          <p className="text-base font-medium md:text-sm">مجموع قیمت:</p>
          <p className="text-lg text-red-600 md:text-base">23,340,000 تومان</p>
        </div>
        <button type="button" className="text-[13px] text-slate-800 md:hidden">
          کد تخفیف دارید؟
        </button>

        {/* laptop */}
        <div className="mb-10 hidden md:block">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-light">کد تخفیف:</p>

            <form className="flex rounded-md">
              <input
                type="text"
                placeholder="123ABC"
                className="w-24 rounded-tr-md rounded-br-md border border-slate-800 text-center opacity-25 focus:border-none"
              />
              <button
                type="button"
                className="rounded-tl-md rounded-bl-md bg-red-400 py-2 px-4 text-white"
              >
                تایید
              </button>
            </form>
          </div>

          <div className="mb-12 flex justify-between font-medium">
            <p>تخفیف:</p>
            <p className="text-slate-800">25,000 تومان</p>
          </div>
        </div>
        <div className="hidden justify-between font-medium md:flex">
          <p>قیمت نهایی:</p>
          <p className="text-red-600">2,850,0000 تومان</p>
        </div>
      </div>

      <ShoppingButtons />
    </section>
  );
};

export default Checkout;
