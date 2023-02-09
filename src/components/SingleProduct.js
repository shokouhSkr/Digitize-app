import React, { useState } from "react";

import { useFilterContext } from "../store/context/filter_context";
import { ProductColors } from "../components";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { formatPrice } from "../utils/helpers";

const SingleProduct = ({ image, company, id, price, title, colors, isLiked }) => {
  const { updateFavorites } = useFilterContext();

  return (
    <div className="rounded-lg bg-white p-1.5 text-sm shadow-md">
      {/* image */}
      <div className="relative mb-4 flex items-center justify-center rounded-lg bg-[#e2e2e2]">
        {/* like button */}
        <button
          className="absolute top-2 right-1 rounded-full bg-[#ebeaea] p-1.5 px-2 sm:py-2.5"
          onClick={() => updateFavorites(id)}
        >
          <FiHeart
            className={`w-3 sm:w-5 ${
              isLiked ? "fill-red-400 stroke-red-400" : "fill-transparent stroke-gray-500"
            }`}
          />
        </button>
        <div className="my-2 w-40">
          <img src={image} alt={title} />
        </div>
      </div>

      <div className="px-2">
        {/* colors */}
        <div className="mb-2 flex justify-between">
          <span className="text-xs font-light text-gray-300">{company}</span>
          <ProductColors colors={colors} width="w-4" height="h-4" />
        </div>

        {/* title */}
        <div className="mb-1 border-b border-gray-100 pb-2">
          <p
            className="mb-2 flex items-center justify-start text-[11px] text-slate-800 2xs:text-xs
                 xs:text-[13px]
                 2xl:text-sm"
          >
            {title}
          </p>
          <p
            className="flex items-center justify-end text-[11px] text-red-600 2xs:text-sm xs:text-[13px]
                 2xl:text-xs"
          >
            {formatPrice(price)} تومان
          </p>
        </div>

        {/* order */}
        <Link
          to={`products/${id}`}
          className="mx-auto flex w-full items-center justify-center py-2 text-center text-xs text-red-400 2xs:text-sm xs:text-[14px]"
        >
          مشاهده و ثبت سفارش
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
