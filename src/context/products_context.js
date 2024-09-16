import { createContext, useReducer, useContext, useEffect } from "react";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../action";
import axios from "axios";
import reducer from "../reducer/product_reducer";
import { type } from "@testing-library/user-event/dist/type";
const initialState = {
  isSidebarOpen: false,
  products_loading: true,
  products_error: false,
  products: [],
  products_featured: [],
  single_product_loading: true,
  single_product_error: false,
  single_product: {},
};
const ProductContext = createContext();

export const ProductsProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const res = await axios.get("../data.json");
      const data = await res.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const fetchSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const res = await axios.get("../singledata.json");
      const data = await res.data;
      const product = data.find((p) => {
        return p.id === id;
      });
      if (product) {
        dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: product });
      } else {
        dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
      }
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductContext);
};
