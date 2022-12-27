import React from "react";

import { Link } from "react-router-dom";
import { Search } from "../components";
import { getUniqueValues } from "../utils/helpers";
import { products } from "../data";
import { logoDesk } from "../assets";

const Header = () => {
  // products => filtered_products
  const categories = getUniqueValues(products, "category");

  return (
    <header className="fixed left-0 top-0 right-0 z-50 hidden bg-[#fdfdfd] px-[5%] py-6 text-sm font-bold text-slate-800 shadow-md md:block">
      <section className="flex items-center justify-between">
        <ul className="flex items-center justify-between gap-4 lg:gap-6 lg:text-base xl:gap-7 xl:text-lg">
          <img src={logoDesk} alt="Digitize" className="w-20" />

          <Link to="/home">خانه</Link>
          {categories.map((category, index) => (
            <button key={index}>{category}</button>
          ))}
        </ul>

        <Search />
      </section>
    </header>
  );
};

export default Header;
