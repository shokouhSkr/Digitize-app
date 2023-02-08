import React from "react";

import { useCartContext } from "../store/context/cart_context";
import { PageHero, CartItems, Checkout } from "../components";

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="سبدخرید" back />

      <section className="mt-8 mb-24 px-[5%] md:mt-28 md:min-h-[calc(100vh-24rem)] md:px-[3%]">
        {cart.length === 0 && (
          <h1 className="mb-6 pt-36 text-center text-xl text-slate-800">سبد خرید شما خالی است.</h1>
        )}
        {cart.length > 0 && (
          <div>
            <div className="justify-between gap-[5%] md:flex">
              <CartItems cart={cart} />
              <Checkout />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Cart;
