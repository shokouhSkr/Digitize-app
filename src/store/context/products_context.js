import React, { useReducer, useContext, useEffect } from "react";

import axios from "axios";
import reducer from "../reducers/products_reducer.js";
import { products_url as url } from "../../utils/constants.js";

const initialState = {
  isFilterModalOpen: false,
  isSortModalOpen: false,
  isLoading: false,
  error: false,
  products: [],
};

const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url) => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" }); // for loading

    try {
      const res = await axios.get(url);

      const loadedProducts = [];
      for (const key in res.data) {
        const data = res.data[key];

        loadedProducts.push({
          id: key,
          title: data.title, // res.data[key].title
          image: data.image,
          price: data.price,
          category: data.category,
          colors: data.colors,
          company: data.company,
        });
      }
      // console.log(loadedProducts);

      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: loadedProducts }); // for fetching successful
    } catch (error) {
      dispatch({ type: "GET_PRODUCTS_ERROR" }); // for fetching failed
    }
  };

  // const id = document.location.pathname.slice(9);
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

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openFilterModal,
        openSortModal,
        closeModal,
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
