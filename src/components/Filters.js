import React, { useState } from "react";

import { Checkbox, PriceRange } from "../components/";
import { filterCompIcon, filterColorsIcon, filterPriceIcon } from "../data";
import { useFilterContext } from "../store/context/filter_context.js";
import { getUniqueValues } from "../utils/helpers";
import { FiChevronDown } from "react-icons/fi";

const Filters = () => {
  const [isActive, setIsActive] = useState({
    filterCompanies: false,
    filterColors: false,
    filterPrice: false,
  });

  const {
    allProducts,
    filters: { companies, colors },
    updateCompanies,
    updateColors,
  } = useFilterContext();

  const uniqueCompanies = getUniqueValues(allProducts, "company");
  const uniqueColors = getUniqueValues(allProducts, "colors");

  return (
    <section>
      <span className="mb-5 block font-semibold text-[#ff755d] lg:text-lg">فیلتر</span>

      {/* companies */}
      <div
        className={`mb-5 flex cursor-pointer items-end justify-between text-sm text-slate-800 md:text-xs lg:text-sm`}
        onClick={() => setIsActive({ ...isActive, filterCompanies: !isActive.filterCompanies })}
      >
        <div className="mr-1.5 flex items-end gap-2">
          {filterCompIcon}
          <span>برند‌محصول</span>
        </div>
        <FiChevronDown
          className={`text-slate-800 transition-all duration-500 ${
            isActive.filterCompanies && "rotate-180"
          }`}
        />
      </div>

      <div className={`${isActive.filterCompanies ? "block" : "hidden"}`}>
        {uniqueCompanies.map((title, index) => {
          // console.log(title); => اپل
          return (
            <Checkbox
              key={index}
              title={title}
              checked={companies.indexOf(title) === -1 ? false : true}
              onChange={() => updateCompanies(title)}
            />
          );
        })}
      </div>
      {/* end of companies */}

      {/* colors */}
      <div
        className={`mb-5 flex cursor-pointer items-end justify-between text-sm text-slate-800 md:text-xs lg:text-sm`}
        onClick={() => setIsActive({ ...isActive, filterColors: !isActive.filterColors })}
      >
        <div className="mr-1.5 flex items-end gap-2">
          {filterColorsIcon}
          <span>رنگ‌محصول</span>
        </div>
        <FiChevronDown
          className={`text-slate-800 transition-all duration-500 ${
            isActive.filterColors && "rotate-180"
          }`}
        />
      </div>

      <div className={`${isActive.filterColors ? "block" : "hidden"}`}>
        {uniqueColors.map((title, index) => {
          return (
            <Checkbox
              key={index}
              title={title}
              checked={colors.indexOf(title) === -1 ? false : true}
              onChange={() => updateColors(title)}
              color
            />
          );
        })}
      </div>
      {/* end of colors */}

      {/* price */}
      <div
        className={`mb-5 flex cursor-pointer items-end justify-between text-sm text-slate-800 md:text-xs lg:text-sm`}
        onClick={() => setIsActive({ ...isActive, filterPrice: !isActive.filterPrice })}
      >
        <div className="mr-1.5 flex items-end gap-2">
          {filterPriceIcon}
          <span>محدوده‌ قیمت</span>
        </div>

        <FiChevronDown
          className={`text-slate-800 transition-all duration-500 ${
            isActive.filterPrice && "rotate-180"
          }`}
        />
      </div>

      <div className={`${isActive.filterPrice ? "block" : "hidden"}`}>
        <PriceRange />
      </div>
      {/* end of price */}
    </section>
  );
};

export default Filters;
