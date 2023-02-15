import React from "react";

import { useFilterContext } from "../store/context/filter_context";
import { PageHero, SingleProduct } from "../components";

const Favorites = () => {
  const { favoriteProducts } = useFilterContext();

  return (
    <main>
      <PageHero title="علاقه‌مندی" />

      {favoriteProducts.length === 0 && (
        <section className="mt-8 mb-24 px-[5%] md:mt-28 md:min-h-[calc(100vh-24rem)] md:px-[3%]">
          <h1 className="mb-6 pt-36 text-center text-xl text-slate-800">
            آیتم موردعلاقه ای وجود ندارد.
          </h1>
        </section>
      )}

      {favoriteProducts.length > 0 && (
        <section className="col-span-12 mb-24 grid grid-cols-2 gap-x-4 gap-y-8 px-[5%] md:col-span-9 md:mt-32 md:grid-cols-3 2xl:grid-cols-4 3xl:col-span-10">
          {favoriteProducts.map((item) => (
            <SingleProduct key={item.id} {...item} />
          ))}
        </section>
      )}
    </main>
  );
};

export default Favorites;
