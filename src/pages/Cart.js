import React from "react";

import { Link } from "react-router-dom";
import { products } from "../data";
import { PageHero, CartItems, Checkout } from "../components";

const Cart = () => {
  const cart = ["kk"];

  return (
    <main>
      <PageHero title="سبدخرید" back />

      <section className="mt-4 mb-20 px-[3%] md:mt-28 md:min-h-[calc(100vh-24rem)]">
        {cart.length === 0 && (
          <h1 className="mb-6 pt-36 text-center text-xl text-slate-800">سبد خرید شما خالی است.</h1>
        )}
        {cart.length > 0 && (
          <div>
            <div className="hidden w-3/5 justify-between bg-transparent p-3 md:flex">
              <Link to="/">سبد‌ خرید</Link>
              <Link to="/" className="text-sm text-red-400">
                بازگشت به خانه
              </Link>
            </div>

            <div className="justify-between gap-[5%] md:flex">
              <CartItems />
              <Checkout />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Cart;
