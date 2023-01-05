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
    <div className="flex justify-between border-gray-100 bg-[#fdfdfd] p-2 last:border-none md:border-b">
      <div className="flex gap-2">
        <img src={products[0].image} alt="" className="w-12" />

        <div className="flex flex-col justify-between py-2">
          <p>{products[0].title}</p>
          <p>{products[0].price}تومان</p>
        </div>
      </div>

      <div className="flex flex-col justify-between py-1">
        <div className="flex justify-end">
          <FiX />
        </div>
        <div className="flex items-center gap-1">
          <button
            className="grid h-5 w-5 place-content-center rounded-full bg-stone-300 p-1"
            // onClick={increaseAmount}
          >
            +
          </button>
          <span className="grid h-8 w-6 place-content-center rounded-sm border border-red-300 p-2">
            {/* {amount} */}1
          </span>
          <button
            className="grid h-5 w-5 place-content-center rounded-full bg-red-300 p-1"
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
