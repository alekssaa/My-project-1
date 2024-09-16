import React, { createContext, useContext, useReducer, useEffect } from "react";
import {
  LOAD_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../action.js";
import { useProductsContext } from "./products_context.js";
import reducer from "../reducer/filterReducer.js";
import { type } from "@testing-library/user-event/dist/type/index.js";
const initalState = {
  all_products: [],
  filtered_products: [],
  filters: {
    text: "",
    category: "Sve",
    min_price: 0,
    price: 0,
    max_price: 0,
  },
};

const FilterContext = createContext();

export const FilterProvaider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initalState);
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "price") {
      value = Number(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [products, state.filters]);
  return (
    <FilterContext.Provider value={{ ...state, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
