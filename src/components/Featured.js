import React from "react";
import Loading from "./Loading.js";
import Error from "../pages/Error.js";
import { useProductsContext } from "../context/products_context.js";
import Product from "./Product.js";
const Featured = () => {
  const {
    products_loading: loading,
    product_error: error,
    products_featured: featured,
  } = useProductsContext();
  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <div className="featured-product">
      {featured.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};
export default Featured;
