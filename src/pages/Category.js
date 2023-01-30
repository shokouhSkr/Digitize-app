import React from "react";

import { PageHero, CategoryItem } from "../components";
import { phoneCategory, laptopCategory, watchCategory } from "../assets";
import { products } from "../data";
import { getUniqueValues } from "../utils/helpers";

const Category = () => {
  const phoneCompanies = products.filter((product) => product.category === "تلفن همراه");
  const uniquePhoneCompanies = getUniqueValues(phoneCompanies, "company");

  const laptopCompanies = products.filter((product) => product.category === "لپ تاپ");
  const uniqueLaptopCompanies = getUniqueValues(laptopCompanies, "company");

  const watchCompanies = products.filter((product) => product.category === "ساعت هوشمند");
  const uniqueWatchCompanies = getUniqueValues(watchCompanies, "company");

  return (
    <main className="md:mt-[92px]">
      <PageHero title="دسته‌بندی" />

      <section className="mb-24 mt-6 px-[5%] md:mb-8 md:mt-32 md:px-[3%]">
        <CategoryItem logo={phoneCategory} title="تلفن همراه" companies={uniquePhoneCompanies} />
        <div className="my-4 h-[0.5px] w-2/3 bg-gray-200"></div>
        <CategoryItem logo={laptopCategory} title="لپ تاپ" companies={uniqueLaptopCompanies} />
        <div className="my-4 h-[0.5px] w-2/3 bg-gray-200"></div>
        <CategoryItem logo={watchCategory} title="ساعت هوشمند" companies={uniqueWatchCompanies} />
      </section>
    </main>
  );
};

export default Category;
