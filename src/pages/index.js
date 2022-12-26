// for "components", "pages", "assets",..., we import all folder files in index.js, and then export it right away, to avoid multiple importing in App.js and etc

import Cart from "./Cart";
import Favorites from "./Favorites";
import Home from "./Home";
import SingleProduct from "./SingleProduct";
import Category from "./Category";
import Error from "./Error";

export { Cart, Favorites, Home, Category, SingleProduct, Error };
