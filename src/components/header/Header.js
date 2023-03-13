import React, { useEffect } from "react";

import { useFilterContext } from "../../store/context/filter_context";
import { useCartContext } from "../../store/context/cart_context";
import { NavLink, Link } from "react-router-dom";
import { categories } from "../../data";
import { Search, Badge } from "..";
import { CgShoppingBag } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { logoDesk } from "../../assets";

const Header = () => {
  const { updateCategory, clearFilters, favoriteProducts } = useFilterContext();
  const { totalItems } = useCartContext();

  return (
    <header className="fixed left-0 top-0 right-0 z-50 hidden bg-[#fdfdfd] px-[3%] py-6 text-sm font-bold text-slate-800 shadow-md md:block">
      <nav className="flex items-center justify-between">
        <ul className="flex items-center justify-between gap-4 lg:gap-6 lg:text-base xl:gap-7 xl:text-lg">
          <img src={logoDesk} alt="Digitize" className="w-20" />

          <NavLink to="/" onClick={clearFilters}>
            خانه
          </NavLink>
          {categories.map((category) => {
            const { id, title, path } = category;
            return (
              <NavLink to={`/categories${path}`} key={id} onClick={() => updateCategory(title)}>
                {title}
              </NavLink>
            );
          })}
        </ul>

        <div className="flex flex-1 items-center justify-end gap-8">
          {/* cart and favorite icons */}
          <div className="flex gap-5">
            <Link to="/favorites">
              {favoriteProducts.length === 0 && <FiHeart className="text-2xl text-slate-700" />}
              {favoriteProducts.length > 0 && <FaHeart className="text-2xl text-slate-700" />}
            </Link>
            <Link to="/cart">
              <span className="relative">
                <CgShoppingBag className="text-2xl text-slate-700" />
                {totalItems > 0 && <Badge />}
              </span>
            </Link>
          </div>

          <Search />
        </div>
      </nav>
    </header>
  );
};

export default Header;
