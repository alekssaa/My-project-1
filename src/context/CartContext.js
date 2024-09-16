import React, { createContext, useReducer, useContext, useEffect } from "react";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
} from "../action";
import reducer from "../reducer/cartReducer";
import { type } from "@testing-library/user-event/dist/type";

const getCart = () => {
  if (localStorage.getItem("cart")) {
    return JSON.parse(localStorage.getItem("cart"));
  } else return [];
};
const initalState = {
  cart: getCart(),
  total_amount: 0,
};

const CartContext = createContext();
export const CartProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeCartItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, clearCart, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
