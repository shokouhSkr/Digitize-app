import React, { useState } from "react";

import { Checkbox, PriceRange } from "../components/";
import { filterCompIcon, filterColorsIcon, filterPriceIcon, products } from "../data";
import { getUniqueValues } from "../utils/helpers";
import { FiChevronDown } from "react-icons/fi";

const Filters = () => {
  const [active, setActive] = useState({
    filterCompanies: false,
    filterColors: false,
    filterPrice: false,
  });

  // filtered data <= products
  const companies = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");

  return (
    <section>
      <span className="mb-5 block font-semibold text-[#ff755d] lg:text-lg">فیلتر</span>

      {/* companies */}
      <div
        className={`mb-5 flex cursor-pointer items-end justify-between text-xs text-slate-800 lg:text-sm`}
        onClick={() => setActive({ ...active, filterCompanies: !active.filterCompanies })}
      >
        <div className="mr-1.5 flex items-end gap-2">
          {filterCompIcon}
          <span>برند‌محصول</span>
        </div>
        <FiChevronDown
          className={`text-slate-800 transition-all duration-500 ${
            active.filterCompanies && "rotate-180"
          }`}
        />
      </div>

      <div className={`${active.filterCompanies ? "block" : "hidden"}`}>
        {companies.map((title, index) => {
          return <Checkbox key={index} title={title} />;
        })}
      </div>
      {/* end of companies */}

      {/* colors */}
      <div
        className={`mb-5 flex cursor-pointer items-end justify-between text-xs text-slate-800 lg:text-sm`}
        onClick={() => setActive({ ...active, filterColors: !active.filterColors })}
      >
        <div className="mr-1.5 flex items-end gap-2">
          {filterColorsIcon}
          <span>رنگ‌محصول</span>
        </div>
        <FiChevronDown
          className={`text-slate-800 transition-all duration-500 ${
            active.filterColors && "rotate-180"
          }`}
        />
      </div>

      <div className={`${active.filterColors ? "block" : "hidden"}`}>
        {colors.map((title, index) => {
          return <Checkbox key={index} title={title} colors />;
        })}
      </div>
      {/* end of colors */}

      {/* price */}
      <div
        className={`mb-5 flex cursor-pointer items-end justify-between text-xs text-slate-800 lg:text-sm`}
        onClick={() => setActive({ ...active, filterPrice: !active.filterPrice })}
      >
        <div className="mr-1.5 flex items-end gap-2">
          {filterPriceIcon}
          <span>محدوده‌قیمت</span>
        </div>

        <FiChevronDown
          className={`text-slate-800 transition-all duration-500 ${
            active.filterPrice && "rotate-180"
          }`}
        />
      </div>

      <div className={`${active.filterPrice ? "block" : "hidden"}`}>
        <PriceRange />
      </div>

      {/* end of price */}
    </section>
  );
};

export default Filters;
