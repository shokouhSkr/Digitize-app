import React, { useReducer, useContext, useEffect } from "react";

import axios from "axios";
import reducer from "../reducers/products_reducer.js";
import { products_url as url } from "../../utils/constants.js";

const initialState = {
  isFilterModalOpen: false,
  isSortModalOpen: false,
  isLiked: false,
};

const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url) => {
    const res = await axios.get(url);

    const loadedProducts = [];
    for (const key in res.data) {
      const data = res.data[key];

      loadedProducts.push({
        id: key,
        title: data.title,
        image: data.image,
        price: data.price,
        category: data.category,
        colors: data.colors,
        company: data.company,
      });
    }

    console.log(loadedProducts);
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const openFilterModal = () => {
    dispatch({ type: "OPEN_FILTER_MODAL" });
  };

  const openSortModal = () => {
    dispatch({ type: "OPEN_SORT_MODAL" });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_FILTER_MODAL" });
    dispatch({ type: "CLOSE_SORT_MODAL" });
  };

  const filterHandler = () => {
    // filterProducts()
    dispatch({ type: "CLOSE_FILTER_MODAL" });
  };

  const clearFilterHandler = () => {
    // clearFilters()
    dispatch({ type: "CLOSE_FILTER_MODAL" });
  };

  const sortHandler = () => {
    // sortProducts()
    dispatch({ type: "CLOSE_SORT_MODAL" });
  };

  const clearSortHandler = () => {
    // clearSort()
    dispatch({ type: "CLOSE_SORT_MODAL" });
  };

  const likeProductHandler = (id) => {
    dispatch({ type: "LIKE_PRODUCT", payload: id });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openFilterModal,
        openSortModal,
        filterHandler,
        clearFilterHandler,
        sortHandler,
        clearSortHandler,
        closeModal,
        likeProductHandler,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, ProductsProvider };
