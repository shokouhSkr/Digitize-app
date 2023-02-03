const products_reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_FILTER_MODAL":
      return { ...state, isFilterModalOpen: true };

    case "CLOSE_FILTER_MODAL":
      return { ...state, isFilterModalOpen: false };

    case "OPEN_SORT_MODAL":
      return { ...state, isSortModalOpen: true };

    case "CLOSE_SORT_MODAL":
      return { ...state, isSortModalOpen: false };

    case "GET_PRODUCTS_BEGIN":
      return { ...state, isLoading: true };

    case "GET_PRODUCTS_SUCCESS":
      return { ...state, isLoading: false, products: action.payload };

    case "GET_PRODUCTS_ERROR":
      return { ...state, isLoading: false, error: true };

    case "LIKE_PRODUCT":
      console.log("here", action.payload);
      return { ...state, isLiked: true };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default products_reducer;
