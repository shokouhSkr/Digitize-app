import React from "react";

import { sortPhone, arrow, filterIcon } from "../assets";
import Button from "../components/common/Button";

const FilterButtons = () => {
  return (
    <div className="mb-6 flex gap-4 px-[5%] text-xs font-bold text-slate-800 xs:mb-8 xs:text-sm md:hidden">
      <Button bgColor="bg-[#fdfdfd]" onClick>
        <div className="ml-1 flex items-center">
          <img src={sortPhone} alt="sort" className="-ml-1" />
          <img src={arrow} alt="arrow" className="h-4" />
        </div>
        مرتب سازی
      </Button>
      <Button bgColor="bg-[#fdfdfd]" onClick>
        <img src={filterIcon} alt="filter" className="ml-1" />
        فیلتر
      </Button>
    </div>
  );
};

export default FilterButtons;
