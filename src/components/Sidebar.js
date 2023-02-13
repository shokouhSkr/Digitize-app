import React from "react";

import { useFilterContext } from "../store/context/filter_context";
import { Filters } from "../components";
import { categories } from "../data";

const Sidebar = () => {
  const { updateCategory } = useFilterContext();

  return (
    <aside className="col-span-3 row-span-2 hidden md:block 3xl:col-span-2">
      <div className="scrollbar sticky top-[108px] max-h-[calc(100vh_-_160px)] overflow-y-auto overflow-x-hidden rounded-md bg-[#fdfdfd] p-5 pb-8">
        {/* category */}
        <div className="mb-5">
          <span className="mb-5 block font-semibold text-[#ff755d] lg:text-lg">دسته‌‌بندی</span>

          <div className="mb-1 text-xs lg:text-sm">
            {categories.map((category) => {
              const { id, title, icon } = category;

              return (
                <button
                  key={id}
                  type="button"
                  name="category"
                  onClick={() => updateCategory(title)}
                  className="mb-4 flex items-end text-gray-400 focus:text-slate-800"
                >
                  <img src={icon} alt={title} className="ml-2" />
                  <p>{title}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* divider */}
        <hr class="mb-3 bg-gray-50 opacity-25" />

        <Filters />
      </div>
    </aside>
  );
};

export default Sidebar;
