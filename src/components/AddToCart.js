import React from "react";

import { Link } from "react-router-dom";
import { sellerIcon, warrantyIcon, deliveryIcon } from "../data";

const AddToCart = ({ price }) => {
  return (
    <>
      {/* mobile */}
      <section className="flex items-center gap-[12%] rounded-lg bg-white px-3 py-2 md:hidden">
        <button
          onClick
          type="button"
          className="w-full rounded bg-[#ff755c] py-3 px-2 text-sm text-white 2xs:px-6 x:text-base md:hidden"
        >
          <Link to="/cart">افزودن به سبد خرید</Link>
        </button>

        <div className="flex">
          <p className="w-full font-semibold x:text-lg">
            {price} <span className="text-sm">تومان</span>
          </p>
        </div>
      </section>

      {/* laptop */}
      <div className="w-full 2xl:w-3/5">
        <div className="hidden rounded bg-stone-100 p-4 md:block">
          <div className="mb-16">
            <div className="mb-4 flex gap-3 text-xs x:text-sm md:text-xs lg:text-sm">
              <div className="flex items-center gap-1">
                {sellerIcon}
                <span>فروشنده:</span>
              </div>
              <span>دیجی تایز</span>
            </div>
            <div className="mb-4 flex gap-3 text-xs x:text-sm md:text-xs lg:text-sm">
              <div className="flex items-center gap-1">
                {warrantyIcon}
                <span>گارانتی:</span>
              </div>
              <span>18 ماه زرین خدمت</span>
            </div>
            <div className="mb-4 flex gap-3 text-xs x:text-sm md:text-xs lg:text-sm">
              <div className="flex items-center gap-1">
                {deliveryIcon}
                <span>ارسال توسط:</span>
              </div>
              <span>انبار تهران</span>
            </div>
          </div>

          <div className="text-left">
            <p className="mb-2 text-2xl font-semibold text-[#ff755c] md:text-xl lg:text-2xl">
              {price} <span className="text-base font-normal md:text-sm lg:text-base">تومان</span>
            </p>
            <button
              type="button"
              className="w-full rounded bg-[#ff755c] px-2 py-3 text-[#fdfdfd] md:text-sm lg:text-base"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
