import React from "react";

import { PageHero, Sidebar, Sortbar, Products, FilterButtons } from "../components";

const Home = () => {
  return (
    <main className="md:mt-[92px]">
      <PageHero title="محصولات" />
      <FilterButtons />
      <section className="mx-auto grid grid-cols-12 gap-x-5 gap-y-10 bg-[#f4f4f4] md:grid-rows-[55px_minmax(500px,_1fr)] md:p-4">
        <Sidebar />
        <Sortbar />
        <Products />
      </section>
    </main>
  );
};

export default Home;
