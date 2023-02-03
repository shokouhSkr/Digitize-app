import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./store/context/products_context";
import { FilterProvider } from "./store/context/filter_context";
import { CartProvider } from "./store/context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        {/* <CartProvider> */}
        <App />
        {/* </CartProvider> */}
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);
