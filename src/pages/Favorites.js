import React from "react";
import PageHero from "../components/PageHero";

const Favorites = () => {
  const cart = [];

  return (
    <main>
      <PageHero title="علاقه‌مندی" />

      {cart.length === 0 && <p className="text-center">آیتم موردعلاقه ای وجود ندارد</p>}
    </main>
  );
};

export default Favorites;
