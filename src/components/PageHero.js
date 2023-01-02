import React from "react";

import { Link } from "react-router-dom";
import Search from "./Search";
import { logoMob, backBtn } from "../assets";

const PageHero = ({ title, back }) => {
  return (
    <section className="left-0 top-0 right-0 z-50 mb-3 bg-stone-100 px-[5%] pt-8 pb-1 text-xl font-bold text-slate-800 md:hidden">
      <div className={`${back && "mt-1"} flex items-center justify-between`}>
        {back && (
          <Link
            to="/"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-white shadow-md md:hidden"
          >
            <img src={backBtn} alt="back" />
          </Link>
        )}
        {!back && <img src={logoMob} alt="Digitize" />}
        <h1 className={`ml-4 text-base x:text-lg ${back && "ml-0"}`}>{title}</h1>

        <Search />
      </div>
    </section>
  );
};

export default PageHero;
