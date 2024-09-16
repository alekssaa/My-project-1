import React from "react";
import Product from "../components/Product";
import Filters from "../components/Filters";
import { useFilterContext } from "../context/filters";
const Products = () => {
  const { filtered_products: products } = useFilterContext();
  return (
    <div className="products ">
      <Filters />
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
