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

  const closeFilterModal = () => {
    dispatch({ type: "CLOSE_FILTER_MODAL" });
  };

  const openSortModal = () => {
    dispatch({ type: "OPEN_SORT_MODAL" });
  };

  const closeSortModal = () => {
    dispatch({ type: "CLOSE_SORT_MODAL" });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openFilterModal,
        closeFilterModal,
        openSortModal,
        closeSortModal,
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
