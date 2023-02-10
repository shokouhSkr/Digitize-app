import React from "react";

import { PageHero, CategoryItem } from "../components";
import { phoneCategory, laptopCategory, watchCategory } from "../assets";
import { getUniqueCompanies } from "../utils/helpers";
import { useFilterContext } from "../store/context/filter_context";

const Category = () => {
  const { allProducts } = useFilterContext();

  const uniquePhoneCompanies = getUniqueCompanies(allProducts, "تلفن‌همراه");
  const uniqueLaptopCompanies = getUniqueCompanies(allProducts, "لپ‌تاپ");
  const uniqueWatchCompanies = getUniqueCompanies(allProducts, "ساعت‌هوشمند");

  return (
    <main className="md:mt-[92px]">
      <PageHero title="دسته‌بندی" />

      <section className="mb-24 mt-6 px-[5%] md:mb-8 md:mt-32 md:px-[3%]">
        <CategoryItem logo={phoneCategory} title="تلفن‌همراه" companies={uniquePhoneCompanies} />
        <div className="my-4 h-[0.5px] w-2/3 bg-gray-200"></div>
        <CategoryItem logo={laptopCategory} title="لپ‌تاپ" companies={uniqueLaptopCompanies} />
        <div className="my-4 h-[0.5px] w-2/3 bg-gray-200"></div>
        <CategoryItem logo={watchCategory} title="ساعت‌هوشمند" companies={uniqueWatchCompanies} />
      </section>
    </main>
  );
};

export default Category;
