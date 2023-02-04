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

    case "UPDATE_CHECKBOX":
      return { ...state, filters: { ...state.filters, checked: action.payload } };

    case "UPDATE_SEARCH":
      return { ...state, filters: { ...state.filters, text: action.payload } };

    case "UPDATE_CATEGORY":
      return { ...state, filters: { ...state.filters, category: action.payload } };

    case "UPDATE_PRICE":
      return { ...state, filters: { ...state.filters, price: action.payload } };

    case "FILTER_PRODUCTS":
      // always do this for filtering. we need a copy of all products
      let tempProducts = [...state.allProducts];

      const { text, price, category, checked } = state.filters;

      if (text) {
        tempProducts = tempProducts.filter((product) => product.title.startsWith(text));
      }
      // if(category) {
      //   tempProducts = tempProducts.filter((product) =>product.category === )
      // }

      console.log("work", tempProducts);
      return { ...state, filteredProducts: tempProducts };

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
