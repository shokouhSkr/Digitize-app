import React from "react";

import { useProductsContext } from "../store/context/products_context";
import { sortPhone, arrow, filterIcon } from "../assets";

const FilterButtons = () => {
  const { openFilterModal, openSortModal } = useProductsContext();

  return (
    <div className="mb-6 flex gap-4 px-[5%] text-xs font-bold text-slate-800 2xs:text-sm xs:mb-8 md:hidden">
      <div
        onClick={openSortModal}
        className="flex w-full cursor-pointer items-center justify-start rounded-md bg-[#fdfdfd] px-2 py-2.5 md:hidden"
      >
        <div className="ml-1 flex items-center">
          <img src={sortPhone} alt="sort" className="-ml-1" />
          <img src={arrow} alt="arrow" className="h-4" />
        </div>
        <span>مرتب‌سازی</span>
      </div>

      <div
        onClick={openFilterModal}
        className="flex w-full cursor-pointer items-center justify-start rounded-md bg-[#fdfdfd] p-2 md:hidden"
      >
        <img src={filterIcon} alt="filter" className="ml-1" />
        <span>فیلتر</span>
      </div>
    </div>
  );
};

export default FilterButtons;
