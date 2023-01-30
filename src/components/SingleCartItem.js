import React, { useState } from "react";

import { FiX } from "react-icons/fi";
import { products } from "../data";

const SingleCartItem = () => {
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    if (amount === 5) return;
    setAmount((prevAmount) => prevAmount + 1);
  };

  const decreaseAmount = () => {
    if (amount === 1) return;
    setAmount((prevAmount) => prevAmount - 1);
  };

  return (
    <div className="flex justify-between border-gray-100 bg-[#fdfdfd] last:border-none md:border-b md:p-4">
      <div className="flex gap-2">
        <div className="grid place-items-center">
          <img src={products[4].image} alt="" className="w-14 md:w-20" />
        </div>

        <div className="flex flex-col gap-6 py-2 text-xs 2xs:text-sm md:gap-6">
          <div className="flex items-center gap-1.5 md:gap-2">
            <p>{products[4].title}</p>
            <div className={`h-4 w-4 rounded-full bg-red-400`}></div>
          </div>
          <p className="text-red-600">{products[4].price} تومان</p>
        </div>
      </div>

      <div className="flex flex-col justify-between py-1">
        <div className="flex justify-end font-light text-red-500 md:text-lg">
          <FiX />
        </div>
        <div className="flex items-center gap-1">
          <button
            className="grid h-5 w-5 place-content-center rounded-full bg-gray-300 pt-0.5"
            // onClick={increaseAmount}
          >
            +
          </button>
          <span className="grid h-8 w-6 place-content-center rounded-sm border border-red-300 p-2">
            {/* {amount} */}1
          </span>
          <button
            className="grid h-5 w-5 place-content-center rounded-full bg-red-200 pt-0.5 text-red-500"
            // onClick={decreaseAmount}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
