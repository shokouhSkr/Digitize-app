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
  }
};

export default products_reducer;
