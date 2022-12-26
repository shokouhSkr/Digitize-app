import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import { Home, Category, Cart, Favorites, SingleProduct, Error } from "./pages";

const App = () => {
  return (
    <Router className="max-w-screen-xl font-iranyekan">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    // <div className="mx-12 bg-pink-300"> گوشی آیفون 13 پرومکس</div>
  );
};

export default App;
