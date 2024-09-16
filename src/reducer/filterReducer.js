import React from "react";
import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../action";

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let prices = action.payload.map((product) => {
      return product.price;
    });

    let maxPrice = Math.max(...prices);
    let minPrice = Math.min(...prices);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        price: maxPrice,
        max_price: maxPrice,
        min_price: minPrice,
      },
    };
  } else if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, min_price, price, max_price } = state.filters;
    let tempProduct = [...all_products];

    if (text) {
      tempProduct = tempProduct.filter((product) => {
        return product.name.toLowerCase().includes(text.toLowerCase());
      });
    }
    if (category !== "Sve") {
      tempProduct = tempProduct.filter((product) => {
        return product.category === category;
      });
    }

    if (price !== max_price) {
      tempProduct = tempProduct.filter((product) => {
        return product.price <= price;
      });
    }

    return {
      ...state,
      filtered_products: [...tempProduct],
    };
  } else if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "Sve",
        price: state.filters.max_price,
      },
    };
  }
  return state;
};

export default filterReducer;
