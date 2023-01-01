import React, { useReducer, useContext } from "react";
import reducer from "../reducers/products_reducer.js";
import { products } from "../../data";

const initialState = {
  products: products,
  isFilterModalOpen: false,
  isSortModalOpen: false,
};

const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
