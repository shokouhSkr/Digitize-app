import React, { useReducer, useContext, useEffect } from "react";

import { useProductsContext } from "./products_context.js";
import reducer from "../reducers/filter_reducer.js";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  filters: {
    companies: [],
    colors: [],
    text: "",
    category: "",
    maxPrice: 0,
    minPrice: 0,
    price: 0,
  },
};

const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  // 1. we need all products when it comes to filtering, so we get it from "useProductsContext":
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // 2. to get a copy of them
  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  /////////////////////////////////
  useEffect(() => {
    // dispatch({ type: "SORT_PRODUCTS" });
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [products, state.filters]);

  const updateCompanies = (title) => {
    const currentIndex = state.filters.companies.indexOf(title);
    const newChecked = [...state.filters.companies];

    if (currentIndex === -1) newChecked.push(title);
    else newChecked.splice(currentIndex, 1);

    dispatch({ type: "UPDATE_COMPANIES", payload: newChecked });
  };

  const updateColors = (title) => {
    const currentIndex = state.filters.colors.indexOf(title);
    const newChecked = [...state.filters.colors];

    if (currentIndex === -1) newChecked.push(title);
    else newChecked.splice(currentIndex, 1);

    dispatch({ type: "UPDATE_COLORS", payload: newChecked });
  };

  const updateSearch = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SEARCH", payload: value });
  };

  const updateCategory = (e) => {
    const value = e.target.textContent;
    dispatch({ type: "UPDATE_CATEGORY", payload: value });
  };

  const updatePrice = (e) => {
    const value = Number(e.target.value);
    dispatch({ type: "UPDATE_PRICE", payload: value });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateCompanies,
        updateSearch,
        updateColors,
        updateCategory,
        updatePrice,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider };
