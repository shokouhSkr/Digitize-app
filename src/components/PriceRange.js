import React from "react";

const PriceRange = () => {
  return (
    <div className="-mt-2 text-xs text-slate-800 lg:text-sm">
      <input
        type="range"
        name="price"
        // min={min_price}
        // max={max_price}
        // step="50000"
        // value={price}
        // onChange={updateFilters}
        className="h-[1.5px] w-full rotate-180 cursor-pointer appearance-none bg-red-300 accent-[#ff755d]"
      />

      <div className="flex items-center justify-between">
        <span>
          {/* {max_price} */}
          500
        </span>
        <span className="mt-1 rounded border border-[#ff755d] bg-[#f4f4f4] px-2 py-0.5 text-[#ff755d]">
          {/* {price} */}
          505656
        </span>
        <span>
          {/* {min_price} */}
          100
        </span>
      </div>
    </div>
  );
};

export default PriceRange;
