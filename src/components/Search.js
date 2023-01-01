import React from "react";
import { searchIcon } from "../assets";

const Search = () => {
  return (
    <>
      {/* mobile */}
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-[#fdfdfd] shadow-md md:hidden">
        <img src={searchIcon} alt="search" />
      </div>

      {/* pc */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="hidden w-2/5 rounded-[4px] bg-stone-100 md:flex"
      >
        <img src={searchIcon} alt="search" class="p-3" />
        <input
          type="text"
          name="text"
          // value={text}
          onChange
          placeholder="جستجوی نام محصول، نام برند، و..."
          className="w-full rounded-[4px] border-none bg-stone-100 pl-2 text-sm font-normal focus:outline-none focus:ring-0"
        />
      </form>
    </>
  );
};

export default Search;
