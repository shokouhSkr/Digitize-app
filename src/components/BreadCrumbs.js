import React from "react";

import { Link } from "react-router-dom";
import { leftArrow } from "../assets";

const BreadCrumbs = ({ category, company, title }) => {
  return (
    <div className="md:text-sx mb-8 w-full items-center gap-[3%] rounded-[4px] bg-transparent text-xs font-normal text-gray-300 x:text-sm md:flex md:bg-[#fdfdfd] md:p-3 md:text-xs lg:text-sm">
      <div className="flex items-center gap-2 text-red-400">
        <h3>
          <Link to="/">{category}</Link>
        </h3>
        <img src={leftArrow} alt="" />
        <h3>
          <Link to="/">برند {company}</Link>
        </h3>
        <img src={leftArrow} alt="" />
        <h3 className="text-slate-800">{title}</h3>
      </div>
    </div>
  );
};

export default BreadCrumbs;
