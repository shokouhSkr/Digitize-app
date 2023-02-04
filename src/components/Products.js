import React, { useState } from "react";

import { ProductColors, Loading } from "../components";
import { useProductsContext } from "../store/context/products_context";
import { useFilterContext } from "../store/context/filter_context";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { formatPrice } from "../utils/helpers";

const Products = () => {
  const { isLiked, likeProductHandler, error, isLoading } = useProductsContext();
  const { filteredProducts } = useFilterContext();

  // const [likedProduct, setLikedProduct] = useState({ id: products[0].id, isLiked: true });

  // const favHandler = (id) => {
  //   const selectedLink = products.find((link) => link.id === id);
  //   console.log(selectedLink.id);
  //   setLikedProduct({ id: selectedLink.id, isLiked: true });
  // };

  if (isLoading) return <Loading />;

  if (error)
    return (
      <main className="col-span-full m-auto mt-40 md:col-start-4">
        <h1 className="text-xl text-slate-800 md:text-2xl">خطا در برقراری ارتباط!</h1>
      </main>
    );

  if (filteredProducts.length === 0)
    return (
      <main className="col-span-full m-auto mt-40 md:col-start-4">
        <h1 className="text-xl text-slate-800 md:text-2xl">محصول موردنظر یافت نشد.</h1>
      </main>
    );

  return (
    <section className="col-span-12 mb-24 grid grid-cols-2 gap-x-4 gap-y-8 px-[5%] md:col-span-9 md:grid-cols-3 md:px-0 2xl:grid-cols-4 3xl:col-span-10">
      {filteredProducts.map((product) => {
        const { image, company, id, price, title, colors } = product;

        return (
          <div key={id} className="rounded-lg bg-white p-1.5 text-sm shadow-md">
            {/* image */}
            <div className="relative mb-4 flex items-center justify-center rounded-lg bg-[#e2e2e2]">
              <button
                className="absolute top-2 right-1 rounded-full bg-[#ebeaea] p-1.5 px-2 sm:py-2.5"
                onClick={() => likeProductHandler(id)}
              >
                <FiHeart
                  className={`w-3 sm:w-5 ${
                    isLiked ? "fill-red-400 stroke-red-400" : "fill-transparent stroke-gray-500"
                  }`}
                />
              </button>
              <div className="my-2 w-40">
                <img src={image} alt={title} />
              </div>
            </div>

            <div className="px-2">
              {/* colors */}
              <div className="mb-2 flex justify-between">
                <span className="text-xs font-light text-gray-300">{company}</span>
                <ProductColors colors={colors} width="w-4" height="h-4" />
              </div>

              {/* title */}
              <div className="mb-1 border-b border-gray-100 pb-2">
                <p
                  className="mb-2 flex items-center justify-start text-[11px] text-slate-800 2xs:text-xs
                 xs:text-[13px]
                 2xl:text-sm"
                >
                  {title}
                </p>
                <p
                  className="flex items-center justify-end text-[11px] text-red-600 2xs:text-sm xs:text-[13px]
                 2xl:text-xs"
                >
                  {formatPrice(price)} تومان
                </p>
              </div>

              {/* order */}
              <button type="button" className="mx-auto flex items-center justify-center py-2">
                <Link
                  to={`products/${id}`}
                  className="flex-1 text-center text-xs text-red-400 2xs:text-sm xs:text-[14px]"
                >
                  مشاهده و ثبت سفارش
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Products;
