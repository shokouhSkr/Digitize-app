import React from "react";
import PageHero from "../components/PageHero";

const Favorites = () => {
  const cart = [];

  return (
    <main>
      <PageHero title="علاقه‌مندی" />

      <section className="mt-8 mb-24 px-[5%] md:mt-28 md:min-h-[calc(100vh-24rem)] md:px-[3%]">
        <h1 className="mb-6 pt-36 text-center text-xl text-slate-800">
          آیتم موردعلاقه ای وجود ندارد.
        </h1>
      </section>
    </main>
  );
};

export default Favorites;
