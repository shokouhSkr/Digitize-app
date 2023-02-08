import { stringify } from "postcss";
import React, { useReducer, useContext, useEffect } from "react";
import reducer from "../reducers/cart_reducer";

const getLocalStorage = () => {
  let cart = [];

  if (cart) return JSON.parse(localStorage.getItem("cart"));
  else return [];
};

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
};

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = ({ id, title, price, image, color }) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, title, price, image, color } });
  };

  const removeItem = (id) => {
    let tempCart = [...state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    dispatch({ type: "REMOVE_ITEM", payload: tempCart });
  };

  const toggleAmount = (id, value) => {};

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        toggleAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
