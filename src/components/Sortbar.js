import React, { useState } from "react";

import { sortOptions } from "../data";
import { sortIcon } from "../assets";

const Sortbar = () => {
  const [active, setActive] = useState(sortOptions[0]);

  const linkHandler = (id) => {
    const selectedLink = sortOptions.find((link) => link.id === id);
    setActive(selectedLink);
    // sortProducts()
  };

  return (
    <div className="col-span-9 hidden items-center gap-[3%] rounded-md bg-[#fdfdfd] px-2 text-xs font-normal text-gray-300 md:flex lg:text-sm 3xl:col-span-10">
      <img src={sortIcon} alt="sort" />

      {sortOptions.map((item) => {
        const { id, title } = item;
        return (
          <button
            key={id}
            className={`relative ${active.id === id && "text-slate-800"}`}
            onClick={() => linkHandler(id)}
          >
            {title}
            <span
              className={`absolute top-0 -left-2 h-[4px] w-[4px] rounded-full bg-[#ff755d] lg:h-[5px] lg:w-[5px] ${
                active.id === id ? "block" : "hidden"
              }`}
            ></span>
          </button>
        );
      })}
    </div>
  );
};

export default Sortbar;
