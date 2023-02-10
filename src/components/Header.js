import React from "react";

import { useFilterContext } from "../store/context/filter_context";
import { Link } from "react-router-dom";
import { categories } from "../data";
import { Search } from "../components";
import { logoDesk } from "../assets";

const Header = () => {
  // products => filtered_products
  const { updateCategory, clearFilters } = useFilterContext();

  return (
    <header className="fixed left-0 top-0 right-0 z-50 hidden bg-[#fdfdfd] px-[3%] py-6 text-sm font-bold text-slate-800 shadow-md md:block">
      <section className="flex items-center justify-between">
        <ul className="flex items-center justify-between gap-4 lg:gap-6 lg:text-base xl:gap-7 xl:text-lg">
          <img src={logoDesk} alt="Digitize" className="w-20" />

          <Link to="/" onClick={clearFilters}>
            خانه
          </Link>
          {categories.map((category) => {
            const { id, title } = category;
            return (
              <button key={id} onClick={() => updateCategory(title)}>
                {title}
              </button>
            );
          })}
        </ul>

        <Search />
      </section>
    </header>
  );
};

export default Header;
