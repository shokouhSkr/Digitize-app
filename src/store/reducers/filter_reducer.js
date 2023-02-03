const filter_reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      // we always make prices clear at the first (loading products)
      const allPrices = action.payload.map((product) => product.price);
      const maxPrice = Math.max(...allPrices);

      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };

    case "UPDATE_FILTERS":
      return { ...state, filters: { ...state.filters, checked: action.payload } };

    case "FILTER_PRODUCTS":
      console.log("filtering...");
      return { ...state };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          text: "",
          category: "",
          checked: [],
          maxPrice: 0,
          minPrice: 0,
          price: 0,
        },
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
