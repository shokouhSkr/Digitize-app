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

    case "FAV_PRODUCT": {
      const id = action.payload;
      const tempItem = state.allProducts.find((item) => item.id === id);

      if (tempItem) {
        const alreadyLiked = state.favoriteProducts.some((item) => item.id === id);

        if (alreadyLiked) {
          const tempList = state.favoriteProducts.map((item) => {
            if (item.id === id) {
              const dislikedItem = false;

              return { ...item, isLiked: dislikedItem };
            } else return { ...item };
          });
          return { ...state, favoriteProducts: tempList.filter((item) => item.isLiked) };
        } else {
          const likedItem = { ...tempItem, isLiked: true };
          // find the item that matchs in filteredProdcut and replace it:

          return {
            ...state,
            favoriteProducts: [likedItem, ...state.favoriteProducts],
          };
        }
      }
    }

    // case "FAV_PRODUCT": {
    //   const id = action.payload;
    //   const tempItem = state.allProducts.find((item) => item.id === id);

    //   if (tempItem) {
    //     const alreadyLiked = state.favoriteProducts.some((item) => item.id === id);

    //     if (alreadyLiked) {
    //       const tempList = state.favoriteProducts.map((item) => {
    //         if (item.id === id) {
    //           const dislikedItem = false;

    //           return { ...item, isLiked: dislikedItem };
    //         } else return { ...item };
    //       });
    //       return { ...state, favoriteProducts: tempList.filter((item) => item.isLiked) };
    //     } else {
    //       const likedItem = { ...tempItem, isLiked: true };

    //       // find the item that matchs in filteredProdcut and replace it:
    //       const tempFilteredList = state.filteredProducts.map((item) => {
    //         if (item.id === id && item.isLiked === true) {
    //           return { ...tempItem, isLiked: false };
    //         } else return item;
    //       });

    //       return {
    //         ...state,
    //         favoriteProducts: [likedItem, ...state.favoriteProducts],
    //         filteredProducts: tempFilteredList,
    //       };
    //     }
    //   }
    // }

    case "UPDATE_COMPANIES":
      return { ...state, filters: { ...state.filters, companies: action.payload } };

    case "UPDATE_SEARCH":
      return { ...state, filters: { ...state.filters, text: action.payload } };

    case "UPDATE_CATEGORY":
      return { ...state, filters: { ...state.filters, category: action.payload } };

    case "UPDATE_COLORS":
      return { ...state, filters: { ...state.filters, colors: action.payload } };

    case "UPDATE_PRICE":
      return { ...state, filters: { ...state.filters, price: action.payload } };

    case "FILTER_PRODUCTS": {
      // for filtering we always need a copy of "all products"
      let tempProducts = [...state.allProducts];

      const { text, price, category, companies, singleCompany, colors } = state.filters;

      if (text) {
        tempProducts = tempProducts.filter((product) => product.title.toLowerCase().includes(text));
      }
      if (category) {
        tempProducts = tempProducts.filter((product) => product.category === category);
      }
      if (price) {
        tempProducts = tempProducts.filter((product) => product.price <= price);
      }

      if (companies.length > 0) {
        tempProducts = tempProducts.filter((product) =>
          companies.some((company) => [product.company].includes(company))
        );
      }
      if (colors.length > 0) {
        tempProducts = tempProducts.filter((product) =>
          colors.some((color) => [product.colors].flat().includes(color))
        );
      }

      return { ...state, filteredProducts: tempProducts };
    }

    case "UPDATE_SORT":
      const { name, value } = action.payload;
      return { ...state, sort: value };

    case "SORT_PRODUCTS": {
      const { sort, filteredProducts } = state;
      let tempProducts = [...filteredProducts];

      if (sort === "گران‌ترین‌محصول") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
        // console.log("گران ترین", tempProducts);
      }
      if (sort === "ارزان‌ترین‌محصول") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        // console.log("ارزان ترین", tempProducts);
      }

      return { ...state, filteredProducts: tempProducts };
    }

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "",
          colors: [],
          companies: [],
          price: state.filters.maxPrice,
        },
      };

    case "CLEAR_SORT":
      return { ...state, sort: "مرتب‌سازی", filters: { ...state.filters } };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
