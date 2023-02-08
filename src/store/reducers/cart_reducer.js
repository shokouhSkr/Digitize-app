const cart_reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, title, price, image, color } = action.payload;
      const tempItem = state.cart.find((item) => item.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map((item) => {
          if (item.id === id + color) {
            const newPrice = item.price + price;
            const newAmount = item.amount + 1;

            return { ...item, price: newPrice, amount: newAmount };
          } else return { ...item };
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = { id: id + color, amount: 1, title, price, image, color };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }

    case "REMOVE_ITEM": {
      return { ...state, cart: action.payload };
    }

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cart_reducer;
