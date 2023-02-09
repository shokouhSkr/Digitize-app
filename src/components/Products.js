import React from "react";

import { Loading, SingleProduct } from "../components";
import { useProductsContext } from "../store/context/products_context";
import { useFilterContext } from "../store/context/filter_context";

const Products = () => {
  const { error, isLoading } = useProductsContext();
  const { filteredProducts } = useFilterContext();
  console.log(filteredProducts, "filter");

  if (isLoading) return <Loading />;

  if (error)
    return (
      <main className="col-span-full m-auto mt-40 md:col-start-4">
        <h1 className="text-xl text-slate-800 md:text-2xl">خطا در برقراری ارتباط!</h1>
      </main>
    );

  if (!filteredProducts)
    return (
      <main className="col-span-full m-auto mt-40 md:col-start-4">
        <h1 className="text-xl text-slate-800 md:text-2xl">محصول موردنظر یافت نشد.</h1>
      </main>
    );

  return (
    <section className="col-span-12 mb-24 grid grid-cols-2 gap-x-4 gap-y-8 px-[5%] md:col-span-9 md:grid-cols-3 md:px-0 2xl:grid-cols-4 3xl:col-span-10">
      {filteredProducts.map((product) => (
        <SingleProduct key={product.id} {...product} />
      ))}
    </section>
  );
};

export default Products;
