import React from "react";

import { useParams } from "react-router-dom";
import { products } from "../data";
import {
  PageHero,
  BreadCrumbs,
  ProductImages,
  ProductColors,
  ProductShipping,
  ProductFeatures,
  AddToCart,
} from "../components";

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <main className="md:mt-[92px]">
      <PageHero title={product.title} back />

      <section className="mb-20 mt-6 px-[3%] md:mb-8 md:mt-28">
        <BreadCrumbs {...product} />

        <div className="gap-[5%] p-6 md:flex md:rounded-[4px] md:bg-[#fdfdfd]">
          <ProductImages {...product} />
          <div className="w-full">
            <div className="mb-10 flex flex-col items-center justify-center text-slate-800 md:mb-5 md:items-start">
              <h1 className="mb-1 text-lg font-bold x:text-xl md:text-lg lg:text-xl">
                {product.title}
              </h1>
              <h2 className="font-light x:text-lg md:text-base lg:text-lg">Iphone 13 128 GB</h2>
            </div>

            {/* divider */}
            <div className="hidden h-[1px] bg-gray-200 md:block"></div>

            <section>
              <div className="mb-7 flex items-center justify-center gap-[10%] md:mb-3 md:mt-5 md:justify-start">
                <span className="text-slate-800 x:text-lg md:text-base lg:text-lg">
                  انتخاب رنگ:
                </span>
                <div>
                  <ProductColors colors={product.colors} width="w-7" height="h-7" singleProduct />
                </div>
              </div>
            </section>

            <ProductShipping />
            <ProductFeatures />
          </div>

          <AddToCart price={product.price} />
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;
