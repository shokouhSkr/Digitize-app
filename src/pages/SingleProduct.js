import React from "react";

import { useParams } from "react-router-dom";
import { PageHero, BreadCrumbs } from "../components";
import { products } from "../data";

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <main className="md:mt-[92px]">
      <PageHero title={product.title} back />

      <section className="mb-20 mt-6 min-h-[calc(100vh-2rem)] px-[5%] md:mt-28">
        <BreadCrumbs {...product} />
      </section>
    </main>
  );
};

export default SingleProduct;
